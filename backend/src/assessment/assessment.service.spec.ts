import { Test, TestingModule } from '@nestjs/testing';
import { AssessmentService, Question } from './assessment.service';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { NotFoundException } from '@nestjs/common';

const mockQuestions = [
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

describe('AssessmentService', () => {
  let service: AssessmentService;
  let db: InMemoryDBService<Question>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [InMemoryDBModule.forRoot()],
      providers: [
        AssessmentService,
        {
          provide: InMemoryDBService,
          useValue: {
            getAll: jest.fn().mockReturnValue(mockQuestions),
            createMany: jest.fn().mockReturnValue(mockQuestions),
            get: jest.fn().mockReturnValue(mockQuestions[0]),
          },
        },
      ],
    }).compile();

    service = module.get<AssessmentService>(AssessmentService);
    db = module.get<InMemoryDBService<Question>>(InMemoryDBService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getQuestions', () => {
    it('should return questions', async () => {
      const mockGetQuestions = jest.fn().mockReturnValue(mockQuestions);

      jest.spyOn(db, 'getAll').mockImplementation(mockGetQuestions);

      const questions = await service.getQuestions();

      expect(questions).toEqual(mockQuestions);
    });

    it('should throw a NotFoundException if question id doesnt exist', async () => {
      const mockGetQuestion = jest.fn().mockReturnValue(undefined);

      jest.spyOn(db, 'get').mockImplementation(mockGetQuestion);

      await service.getQuestionById('7').catch((error) => {
        expect(error).toBeInstanceOf(NotFoundException);
      });
    });

    it('should return question if question id exists', async () => {
      const mockGetQuestion = jest.fn().mockReturnValue(mockQuestions[0]);

      jest.spyOn(db, 'get').mockImplementation(mockGetQuestion);

      const question = await service.getQuestionById('1');

      expect(question).toEqual(mockQuestions[0]);
    });
  });
});
