import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
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
  getNFT(@Query('chainId') chainId: string, @Query('accountAddress') accountAddress: string): Promise<String> {

    // Check if both chainId and accountAddress are provided and meet any validation criteria
    if (!chainId || !accountAddress) {
      throw new BadRequestException('Both chainId and accountAddress are required.');
    }

    return this.appService.getNFT(chainId, accountAddress);
  }
}
