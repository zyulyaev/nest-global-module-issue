import { Inject, Injectable } from '@nestjs/common'
import { ConfigType } from '@nestjs/config'
import { GlobalService } from '../global/global.service'
import { childConfig } from './child.config'

@Injectable()
export class ChildService {
  constructor (
    private readonly globalService: GlobalService,
    @Inject(childConfig.KEY) private readonly config: ConfigType<typeof childConfig>
  ) {
  }

  getValue (): string {
    return this.globalService.transform(this.config.SOME_CONFIG)
  }
}
