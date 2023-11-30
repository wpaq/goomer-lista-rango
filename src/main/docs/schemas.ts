import {
  errorSchema,
  restaurantSchema,
  addRestaurantParamsSchema,
  updateRestaurantParamsSchema,
  productSchema,
  addProductParamsSchema
} from './schemas/'

export default {
  error: errorSchema,
  restaurant: restaurantSchema,
  addRestaurantParams: addRestaurantParamsSchema,
  updateRestaurantParams: updateRestaurantParamsSchema,
  product: productSchema,
  addProductParams: addProductParamsSchema
}
