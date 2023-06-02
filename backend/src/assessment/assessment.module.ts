import { Module, ClassSerializerInterceptor } from '@nestjs/common';
import { AssessmentController } from './assessment.controller';
import { AssessmentService } from './assessment.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  controllers: [AssessmentController],
  providers: [
    AssessmentService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
  imports: [InMemoryDBModule.forRoot()],
})
export class AssessmentModule {}
