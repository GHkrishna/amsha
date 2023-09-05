import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('allAPIs')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/test')
  testAPI(): String {
    return this.appService.testAPI();
  }

  @Get('/api/getNft')
  getHello(): Promise<String> {
    return this.appService.getHello();
  }
}
