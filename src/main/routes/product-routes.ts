import { adaptRoute } from '@/main/adapters'
import { makeAddProductController, makeUpdateProductController, makeDeleteProductController } from '@/main/factories/controllers'

import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/product', adaptRoute(makeAddProductController()))
  router.put('/product/:productId', adaptRoute(makeUpdateProductController()))
  router.delete('/product/:productId', adaptRoute(makeDeleteProductController()))
}
