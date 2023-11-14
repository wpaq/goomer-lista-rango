import { type RestaurantModel } from '@/domain/models'

export interface LoadRestaurantByIdRepository {
  loadById: (id: string) => Promise<RestaurantModel>
}
