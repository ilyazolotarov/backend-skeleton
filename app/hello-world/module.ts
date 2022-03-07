import { Module } from '@nestjs/common';
import { HelloWorldService } from 'app/hello-world/service';

@Module({
  providers: [HelloWorldService],
  exports: [HelloWorldService],
})
export class HelloWorldModule {}
