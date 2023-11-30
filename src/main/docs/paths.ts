import {
  restaurantPath,
  restaurantPathWithId,
  productPath
} from './paths/'

export default {
  '/restaurant': restaurantPath,
  '/restaurant/{restaurantId}': restaurantPathWithId,
  '/product': productPath
}
