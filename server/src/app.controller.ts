import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): String {
    return this.appService.getHello();
  }
  // getNFT(): Object {
  //   console.log("From services",process.env.PORT);
  //   return this.appService.getNFT();
  // }
}
