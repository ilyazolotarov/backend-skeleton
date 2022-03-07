import { initApp } from '@app/app-init';
import { HelloWorldService } from '@app/hello-world/service';
import { FunctionModule } from './module';

export async function handler(e: any) {
  const app = await initApp(FunctionModule);
  const service = app.get(HelloWorldService);
  const hello = service.getHello();
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `[From Function 1 (${e.requestContext.time})]: ${hello}`,
  };
}
