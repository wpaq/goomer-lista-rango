import { type RestaurantModel } from '@/domain/models'
import { type AddRestaurantParams } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

export const mockRestaurantModel = (): RestaurantModel => ({
  id: faker.string.uuid(),
  photo: faker.image.url(),
  name: faker.person.fullName(),
  address: faker.location.streetAddress(),
  openingHours: faker.string.numeric(2)
})

export const mockRestaurantsModel = (): RestaurantModel[] => [
  mockRestaurantModel(),
  mockRestaurantModel()
]

export const mockAddRestaurantParams = (): AddRestaurantParams => ({
  photo: faker.image.url(),
  name: faker.person.fullName(),
  address: faker.location.streetAddress(),
  openingHours: faker.string.numeric(2)
})
