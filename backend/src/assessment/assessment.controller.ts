import { Body, Controller, Get, Post } from '@nestjs/common';
import { AssessmentService } from './assessment.service';
import {
  QuestionResponseDto,
  DetermineResultsDto,
} from './dtos/assessment.dto';

@Controller('assessment')
export class AssessmentController {
  constructor(private readonly assessmentService: AssessmentService) {}

  @Get('/questions')
  async getQuestions(): Promise<QuestionResponseDto[]> {
    return await this.assessmentService.getQuestions();
  }

  @Post('/results')
  async determinePersonalityTrait(
    @Body() body: DetermineResultsDto,
  ): Promise<string> {
    return await this.assessmentService.determinePersonalityTrait(
      body.selectedOptions,
    );
  }
}
