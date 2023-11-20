import { type RestaurantModel } from '@/domain/models'

export type UpdateRestaurantParams = {
  photo?: string
  name?: string
  address?: string
  openingHours?: string
}

export interface UpdateRestaurant {
  update: (id: string, data: UpdateRestaurantParams) => Promise<RestaurantModel>
}
