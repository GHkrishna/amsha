import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  async getHello(): Promise<string> {
    const getData = async (): Promise<any> => {
      const chain = process.env.TEMP_VARIABLE_CHAIN_ID;
      const address = process.env.TEMP_VARIABLE_ACCOUNT_ADDRESS;
      try {
        const response = await this.http
          .get(
            `https://testnets-api.opensea.io/v2/chain/${chain}/account/${address}/nfts`,
          )
          .toPromise();

        return response.data;
      } catch (error) {
        console.error(error);
        throw new Error('An error happened!');
      }
    };

    const data = await getData();
    console.log('This is data returned as response.data ', data.nfts);

    return data.nfts;
  }

  testAPI(): string {
    return `hello from service ${process.env.SERVER_PORT}`;
  }
}
