import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';

export interface Question extends InMemoryDBEntity {
  id: string;
  question: string;
  options: string[];
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
          'Don’t dare to interrupt them',
          'Think it’s more important to give them some of your time; work can wait',
          'Listen, but with only with half an ear',
          'Interrupt and explain that you are really busy at the moment',
        ],
      },
      {
        id: '2',
        question:
          'You’ve been sitting in the doctor’s waiting room for more than 25 minutes. You:',
        options: [
          'Look at your watch every two minutes',
          'Bubble with inner anger, but keep quiet',
          'Explain to other equally impatient people in the room that the doctor is always running late',
          'Complain in a loud voice, while tapping your foot impatiently',
        ],
      },
      {
        id: '3',
        question:
          'You’re having an animated discussion with a colleague regarding a project that you’re in charge of. You:',
        options: [
          'Don’t dare contradict them',
          'Think that they are obviously right',
          'Defend your own point of view, tooth and nail',
          'Continuously interrupt your colleague',
        ],
      },
    ];

    await this.db.createMany(questions);
  }

  async getQuestions(): Promise<Question[]> {
    return await this.db.getAll();
  }
}
