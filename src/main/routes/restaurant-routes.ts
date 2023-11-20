import { adaptRoute } from '@/main/adapters'
import { makeAddRestaurantController, makeLoadRestaurantsController, makeLoadRestaurantByIdController, makeUpdateRestaurantController } from '@/main/factories/controllers'

import { type Router } from 'express'

export default (router: Router): void => {
  router.post('/restaurant', adaptRoute(makeAddRestaurantController()))
  router.get('/restaurant', adaptRoute(makeLoadRestaurantsController()))
  router.get('/restaurant/:restaurantId', adaptRoute(makeLoadRestaurantByIdController()))
  router.put('/restaurant/:restaurantId', adaptRoute(makeUpdateRestaurantController()))
}
