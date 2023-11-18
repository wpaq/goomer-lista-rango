import { mockAddRestaurantParams } from '@/tests/domain/mocks'

import { RestaurantTypeormRepository, TypeormHelper } from '@/infra/db/typeorm'
import { Restaurant } from '@/infra/db/typeorm/entities'

let restaurantRepository

const makeSut = (): RestaurantTypeormRepository => {
  return new RestaurantTypeormRepository()
}

describe('RestaurantTypeormRepository', () => {
  beforeAll(async () => {
    await TypeormHelper.connect()
    restaurantRepository = TypeormHelper.client.getRepository(Restaurant)
  })

  afterEach(async () => {
    await restaurantRepository.delete({})
  })

  afterAll(async () => {
    await TypeormHelper.disconnect()
  })

  describe('add()', () => {
    test('Should add an restaurant on success', async () => {
      const sut = makeSut()
      const addRestaurantParams = mockAddRestaurantParams()
      await sut.add(addRestaurantParams)
      const count = await restaurantRepository.countBy({ name: addRestaurantParams.name })
      expect(count).toBe(1)
    })
  })

  describe('loadAll()', () => {
    test('Should load all restaurants on success', async () => {
      const addRestaurantsParams = [mockAddRestaurantParams(), mockAddRestaurantParams()]
      const addRestaurants = restaurantRepository.create(addRestaurantsParams)
      await restaurantRepository.insert(addRestaurants)

      const sut = makeSut()
      const restaurants = await sut.loadAll()
      expect(restaurants.length).toBe(2)
      expect(restaurants[0].id).toBeTruthy()
      expect(restaurants[0].name).toBe(addRestaurantsParams[0].name)
      expect(restaurants[0].photo).toBe(addRestaurantsParams[0].photo)
      expect(restaurants[1].name).toBe(addRestaurantsParams[1].name)
      expect(restaurants[1].photo).toBe(addRestaurantsParams[1].photo)
    })
  })

  describe('loadById()', () => {
    test('Should load an restaurant on success', async () => {
      const addRestaurantsParams = mockAddRestaurantParams()
      const addRestaurants = restaurantRepository.create(addRestaurantsParams)
      const result = await restaurantRepository.insert(addRestaurants)

      const sut = makeSut()
      const restaurant = await sut.loadById(result.id)
      expect(restaurant.id).toBeTruthy()
      expect(restaurant.name).toBe(addRestaurantsParams.name)
      expect(restaurant.photo).toBe(addRestaurantsParams.photo)
    })
  })

  describe('checkById()', () => {
    test('Should return true on success', async () => {
      const addRestaurantParams = mockAddRestaurantParams()
      const addRestaurant = restaurantRepository.create(addRestaurantParams)
      const result = await restaurantRepository.insert(addRestaurant)

      const sut = makeSut()
      const exists = await sut.checkById(result.id)
      expect(exists).toBe(true)
    })
  })
})
