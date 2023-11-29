import {
  errorSchema,
  restaurantSchema,
  addRestaurantParamsSchema,
  productSchema,
  addProductParamsSchema
} from './schemas/'

export default {
  error: errorSchema,
  restaurant: restaurantSchema,
  addRestaurantParams: addRestaurantParamsSchema,
  product: productSchema,
  addProductParams: addProductParamsSchema
}
