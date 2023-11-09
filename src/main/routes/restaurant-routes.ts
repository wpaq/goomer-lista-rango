import { adaptRoute } from '@/main/adapters'
import { makeAddRestaurantController } from '@/main/factories/controllers'

import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/restaurant', adaptRoute(makeAddRestaurantController()))
}
