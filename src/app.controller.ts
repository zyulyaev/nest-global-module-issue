import { Controller, Get } from '@nestjs/common'
import { ChildService } from './child/child.service'

@Controller()
export class AppController {
  constructor (
    private readonly childService: ChildService
  ) {
  }

  @Get('/hello')
  startSession () {
    return {
      data: this.childService.getValue()
    }
  }
}
