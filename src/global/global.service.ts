import { Inject, Injectable, Scope } from '@nestjs/common'
import { REQUEST } from '@nestjs/core'
import { Request } from 'express'

@Injectable({ scope: Scope.REQUEST })
export class GlobalService {
  constructor (
    @Inject(REQUEST) readonly request: Request
  ) {
  }

  transform (value: string) {
    const path = this.request.path
    return `${path}:${value}`
  }
}
