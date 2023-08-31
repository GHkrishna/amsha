import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello(): string {
    // console.log("From services",process.env.PORT);
    return (`Hello World! ${process.env.OPENSEA_API}`);
    // return 'Hello World!';
  }
  // getNFT(): string {
  //   console.log("From services",process.env.PORT);
  //   return process.env.PORT;
  // }
}
