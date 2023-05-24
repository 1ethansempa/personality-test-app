import { Controller, Get, Param } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import { QuestionResponseDto } from './dtos/assessment.dto';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Get('/questions')
  async getQuestions(): Promise<QuestionResponseDto[]> {
    return await this.assessmentService.getQuestions();
  }

  @Get('/questions/:id')
  async getQuestionById(@Param('id') id: string): Promise<QuestionResponseDto> {
    return await this.assessmentService.getQuestionById(id);
  }
}
