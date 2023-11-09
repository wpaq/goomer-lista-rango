import { type RestaurantModel } from '@/domain/models'
import { type AddRestaurant, type AddRestaurantParams } from '@/domain/usecases'
import { Restaurant } from '@/infra/db/typeorm/entities'
import { TypeormHelper } from '@/infra/db/typeorm/helpers'

export class RestaurantTypeormRepository implements AddRestaurant {
  async add (data: AddRestaurantParams): Promise<boolean | RestaurantModel> {
    const { photo, name, address, openingHours } = data
    const restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
    const newRestaurant = restaurantRepository.create({
      photo,
      name,
      address,
      openingHours
    })
    return await restaurantRepository.save(newRestaurant)
  }
}