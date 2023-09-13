import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  // TODO: don`t forget delete cors on prod
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true })
  app.disable('x-powered-by')
  app.enableShutdownHooks()
  await app.listen(3000)
}
bootstrap()
