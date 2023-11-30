import {
  errorSchema,
  restaurantSchema,
  addRestaurantParamsSchema,
  updateRestaurantParamsSchema,
  productSchema,
  addProductParamsSchema,
  updateProductParamsSchema
} from './schemas/'

export default {
  error: errorSchema,
  restaurant: restaurantSchema,
  addRestaurantParams: addRestaurantParamsSchema,
  updateRestaurantParams: updateRestaurantParamsSchema,
  product: productSchema,
  addProductParams: addProductParamsSchema,
  updateProductParams: updateProductParamsSchema
}
