import { type RestaurantModel } from '@/domain/models'
import { type UpdateRestaurantParams, type AddRestaurantParams } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

const fakerHour = faker.date.between({ from: '2023-01-01T00:00:00', to: '2023-01-01T23:59:59' })
const openingHours = `${String(fakerHour.getHours()).padStart(2, '0')}:${String(fakerHour.getMinutes()).padStart(2, '0')}`

export const mockRestaurantModel = (): RestaurantModel => ({
  id: faker.string.uuid(),
  photo: faker.image.url(),
  name: faker.person.fullName(),
  address: faker.location.streetAddress(),
  openingHours
})

export const mockRestaurantsModel = (): RestaurantModel[] => [
  mockRestaurantModel(),
  mockRestaurantModel()
]

export const mockAddRestaurantParams = (): AddRestaurantParams => ({
  photo: faker.image.url(),
  name: faker.person.fullName(),
  address: faker.location.streetAddress(),
  openingHours
})

export const mockUpdateRestaurantParams = (): UpdateRestaurantParams => ({
  photo: faker.image.url(),
  name: faker.person.fullName(),
  address: faker.location.streetAddress(),
  openingHours
})
