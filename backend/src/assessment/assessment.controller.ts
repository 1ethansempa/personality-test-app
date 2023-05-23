import { Controller, Get, Param } from '@nestjs/common';
import { AssessmentService, Question } from './assessment.service';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Get('/questions')
  async getQuestions(): Promise<Question[]> {
    return await this.assessmentService.getQuestions();
  }

  @Get('/questions/:id')
  async getQuestionById(@Param('id') id: string): Promise<Question> {
    return await this.assessmentService.getQuestionById(id);
  }
}
