import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  async getNFT(chainId: String, accountAddress: String): Promise<string> {

    const _chainId = chainId.toString();
    const _accountAddress = accountAddress.toString();
    const getData = async (): Promise<any> => {
      try {
        const response = await this.http
          .get(
            `https://testnets-api.opensea.io/v2/chain/${_chainId}/account/${_accountAddress}/nfts`,
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
