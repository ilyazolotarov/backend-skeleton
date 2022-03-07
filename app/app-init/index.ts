import { INestApplicationContext } from '@nestjs/common';
import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';
import { NestFactory } from '@nestjs/core';

let _cachedApp: INestApplicationContext | undefined;

export async function initApp(
  module: any,
  options?: NestApplicationContextOptions,
) {
  if (_cachedApp === undefined) {
    _cachedApp = await NestFactory.createApplicationContext(module, options);
  }
  return _cachedApp;
}
