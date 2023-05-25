import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { QuestionResponseDto } from './dtos/assessment.dto';

export interface Question extends InMemoryDBEntity {
  id: string;
  question: string;
  options: Option[];
}

interface Option {
  text: string;
  weight: number;
}

export interface SelectedOption {
  id: string;
  selectedIndex: number;
}

@Injectable()
export class AssessmentService {
  constructor(private readonly db: InMemoryDBService<Question>) {
    this.init();
  }

  async init() {
    const questions = [
      {
        id: '1',
        question:
          'You’re really busy at work and a colleague is telling you their life story and personal woes. You:',
        options: [
          {
            text: 'Don’t dare to interrupt them',
            weight: 1,
          },
          {
            text: 'Think it’s more important to give them some of your time; work can wait',
            weight: 4,
          },
          {
            text: 'Listen, but with only with half an ear',
            weight: 2,
          },
          {
            text: 'Interrupt and explain that you are really busy at the moment',
            weight: 3,
          },
        ],
      },
      {
        id: '2',
        question:
          'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
        options: [
          {
            text: 'Look at your watch every two minutes',
            weight: 2,
          },
          {
            text: 'Bubble with inner anger, but keep quiet',
            weight: 1,
          },
          {
            text: 'Explain to other equally impatient people in the room that the doctor is always running late',
            weight: 3,
          },
          {
            text: 'Complain in a loud voice, while tapping your foot impatiently',
            weight: 4,
          },
        ],
      },
      {
        id: '3',
        question:
          'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
        options: [
          {
            text: 'Don’t dare contradict them',
            weight: 1,
          },
          {
            text: 'Think that they are obviously right',
            weight: 2,
          },
          {
            text: 'Defend your own point of view, tooth and nail',
            weight: 3,
          },
          {
            text: 'Continuously interrupt your colleague',
            weight: 4,
          },
        ],
      },
    ];

    await this.db.createMany(questions);
  }

  /**
   * This function retrieves all questions from a database and returns them as an array of
   * QuestionResponseDto objects.
   * @returns The `getQuestions()` function is returning an array of `QuestionResponseDto` objects. The
   * function retrieves all questions from a database using the `getAll()` method and then maps each
   * question to a `QuestionResponseDto` object using the `QuestionResponseDto` constructor. The
   * resulting array of `QuestionResponseDto` objects is then returned.
   */
  async getQuestions(): Promise<QuestionResponseDto[]> {
    const questions = await this.db.getAll();

    return questions.map((question) => {
      return new QuestionResponseDto(question);
    });
  }

  async getQuestionById(id: string): Promise<{
    question: QuestionResponseDto;
    totalQuestions: number;
    nextQuestionId: any;
  }> {
    const questions = await this.getQuestions();

    const questionMatchingId = questions.find((question) => question.id === id);

    if (questionMatchingId === null || questionMatchingId === undefined) {
      throw new NotFoundException({
        message: 'No question matching id you provided',
      });
    }

    const formattedQuestion = new QuestionResponseDto(questionMatchingId);

    let nextQuestionId = null;

    if (questions.length !== parseInt(id)) {
      nextQuestionId = parseInt(id) + 1;
    }

    return {
      question: formattedQuestion,
      totalQuestions: questions.length,
      nextQuestionId,
    };
  }

  /**
   * This function determines a personality trait based on selected options and returns it as a string.
   * @param {SelectedOption[]} selectedOptions - An array of objects representing the user's selected
   * options for each question in the personality quiz. Each object has two properties: "id" (the ID of
   * the question) and "selectedIndex" (the index of the selected option for that question).
   * @returns a string that represents the personality trait determined based on the selected options. If
   * the score is greater than 8, the function returns 'Extrovert', otherwise it returns 'Introvert'.
   */
  async determinePersonalityTrait(
    selectedOptions: SelectedOption[],
  ): Promise<string> {
    const questions = await this.db.getAll();

    if (selectedOptions.length !== questions.length) {
      throw new BadRequestException({
        message: 'You havent answered all questions',
      });
    }

    let score = 0;

    for (const selectedOption of selectedOptions) {
      const question = questions.find(
        (question) => question.id === selectedOption.id,
      );

      const optionWeight =
        question.options[selectedOption.selectedIndex].weight;

      score += optionWeight;
    }

    if (score > 8) {
      return 'Extrovert';
    } else {
      return 'Introvert';
    }
  }
}
