import { DbAddRestaurant } from '@/data/usecases'
import { type AddRestaurantRepository } from '@/data/protocols'
import { type RestaurantModel } from '@/domain/models'
import { type AddRestaurantParams } from '@/domain/usecases'

describe('DbAddRestaurant usecase', () => {
  test('Should call AddRestaurantRepository with correct data', async () => {
    class AddRestaurantRepositorySpy implements AddRestaurantRepository {
      async add (data: AddRestaurantParams): Promise<boolean | RestaurantModel> {
        const fakeRestaurant = {
          id: 'any_id',
          photo: 'any_photo',
          name: 'any_name',
          address: 'any_address',
          openingHours: 'any_hours'
        }
        return await Promise.resolve(fakeRestaurant)
      }
    }
    const addRestaurantRepositorySpy = new AddRestaurantRepositorySpy()
    const sut = new DbAddRestaurant(addRestaurantRepositorySpy)
    const addSpy = jest.spyOn(addRestaurantRepositorySpy, 'add')
    const addRestaurantParams = {
      photo: 'any_photo',
      name: 'any_name',
      address: 'any_address',
      openingHours: 'any_hours'
    }
    await sut.add(addRestaurantParams)
    expect(addSpy).toHaveBeenCalledWith(addRestaurantParams)
  })
})
