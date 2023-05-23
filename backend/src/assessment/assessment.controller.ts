import { Controller, Get } from '@nestjs/common';
import { AssessmentService, Question } from './assessment.service';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Get('/questions')
  async getQuestions(): Promise<Question[]> {
    return await this.assessmentService.getQuestions();
  }
}
