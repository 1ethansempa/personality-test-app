import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AssessmentModule } from './assessment/assessment.module';

@Module({
  imports: [AssessmentModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
