import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller'
import { ChildModule } from './child/child.module'
import { GlobalModule } from './global/global.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true
    }),
    GlobalModule,
    ChildModule
  ],
  controllers: [AppController]
})
export class AppModule {
}
