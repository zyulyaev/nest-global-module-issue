import { registerAs } from '@nestjs/config'
import * as yup from 'yup'

const configSchema = yup.object({
  SOME_CONFIG: yup.string().default('123')
})

export const childConfig = registerAs('child-config', async () => await configSchema.validate(process.env, {
  stripUnknown: true,
  abortEarly: false
}))
