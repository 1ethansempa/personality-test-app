import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  welcome(): string {
    return 'Personality Test Apis';
  }
}
