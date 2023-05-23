import { Module } from '@nestjs/common';
import { AssessmentController } from './assessment.controller';
import { AssessmentService } from './assessment.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';

@Module({
  controllers: [AssessmentController],
  providers: [AssessmentService],
  imports: [InMemoryDBModule.forRoot()],
})
export class AssessmentModule {}
