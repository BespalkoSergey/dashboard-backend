import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
import { AuthModule } from './modules/auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { DatabaseModule } from './modules/database/database.module'
import { ApiModule } from './modules/api/api.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client')
    }),
    AuthModule,
    ApiModule,
    ConfigModule.forRoot(),
    DatabaseModule
  ],
  controllers: []
})
export class AppModule {}
