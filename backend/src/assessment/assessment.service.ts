import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

export interface Question extends InMemoryDBEntity {
  id: string;
  question: string;
  options: Option[];
}

interface Option {
  text: string;
  weight: number;
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

  async getQuestions(): Promise<Question[]> {
    return await this.db.getAll();
  }

  async getQuestionById(id: string): Promise<Question> {
    const questionMatchingId = await this.db.get(id);

    if (!questionMatchingId) {
      throw new NotFoundException({
        message: 'No question matching id you provided',
      });
    }

    return questionMatchingId;
  }
}
