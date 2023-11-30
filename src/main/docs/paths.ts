import {
  restaurantPath,
  restaurantPathWithId,
  productPath,
  productPathWithId
} from './paths/'

export default {
  '/restaurant': restaurantPath,
  '/restaurant/{restaurantId}': restaurantPathWithId,
  '/product': productPath,
  '/product/{productId}': productPathWithId
}
