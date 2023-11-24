import { adaptRoute } from '@/main/adapters'
import { makeAddProductController } from '@/main/factories/controllers'

import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/product', adaptRoute(makeAddProductController()))
}
