import { adaptRoute } from '@/main/adapters'
import { makeAddRestaurantController, makeLoadRestaurantsController } from '@/main/factories/controllers'

import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/restaurant', adaptRoute(makeAddRestaurantController()))
  router.get('/restaurant', adaptRoute(makeLoadRestaurantsController()))
}
