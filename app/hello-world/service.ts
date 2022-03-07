import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {
  getHello() {
    return 'Hello World!';
  }
}
