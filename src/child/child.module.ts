import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { childConfig } from './child.config'
import { ChildService } from './child.service'

@Module({
  imports: [
    ConfigModule.forFeature(childConfig)
  ],
  providers: [ChildService],
  exports: [ChildService]
})
export class ChildModule {
}
