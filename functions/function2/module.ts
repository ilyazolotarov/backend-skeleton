import { Module } from '@nestjs/common';
import { HelloWorldModule } from 'app/hello-world/module';

@Module({
  imports: [HelloWorldModule],
})
export class FunctionModule {}
