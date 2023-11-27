import { type LoadRestaurantsRepository, type AddRestaurantRepository, type LoadRestaurantByIdRepository, type CheckRestaurantByIdRepository, type UpdateRestaurantRepository, type DeleteRestaurantRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type UpdateRestaurantParams, type AddRestaurantParams } from '@/domain/usecases'
import { Restaurant } from '@/infra/db/typeorm/entities'
import { TypeormHelper } from '@/infra/db/typeorm/helpers'

export class RestaurantTypeormRepository implements AddRestaurantRepository, LoadRestaurantsRepository, LoadRestaurantByIdRepository, CheckRestaurantByIdRepository, UpdateRestaurantRepository, DeleteRestaurantRepository {
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

  async loadAll (): Promise<RestaurantModel[]> {
    const restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
    return await restaurantRepository.find({
      relations: ['products']
    })
  }

  async loadById (id: string): Promise<RestaurantModel> {
    const restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
    return await restaurantRepository.findOne({
      where: { id },
      relations: ['products']
    }) as RestaurantModel
  }

  async checkById (id: string): Promise<boolean> {
    const restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
    const restaurant = await restaurantRepository.findOne({
      where: { id }
    })
    return restaurant !== null
  }

  async update (id: string, data: UpdateRestaurantParams): Promise<RestaurantModel> {
    const restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
    const restaurant = await restaurantRepository.findOne({ where: { id } }) as RestaurantModel
    Object.assign(restaurant, data)
    return await restaurantRepository.save(restaurant)
  }

  async delete (id: string): Promise<void> {
    const restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
    await restaurantRepository.delete({ id })
  }
}
