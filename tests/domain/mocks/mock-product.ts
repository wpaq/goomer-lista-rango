import { type ProductModel } from '@/domain/models'
import { UpdateProductParams, type AddProductParams } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

const fakerHour = faker.date.between({ from: '2023-01-01T00:00:00', to: '2023-01-01T23:59:59' })
const promotionalHours = `${String(fakerHour.getHours()).padStart(2, '0')}:${String(fakerHour.getMinutes()).padStart(2, '0')}`

export const mockProductModel = (): ProductModel => ({
  id: faker.string.uuid(),
  photo: faker.image.url(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  category: faker.commerce.productAdjective(),
  promotionalDescription: faker.commerce.productDescription(),
  promotionalPrice: faker.commerce.price(),
  promotionalDays: faker.date.weekday(),
  promotionalHours
})

export const mockAddProductParams = (): AddProductParams => ({
  photo: faker.image.url(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  category: faker.commerce.productAdjective(),
  restaurantId: faker.string.uuid(),
  promotionalDescription: faker.commerce.productDescription(),
  promotionalPrice: faker.commerce.price(),
  promotionalDays: faker.date.weekday(),
  promotionalHours
})

export const mockUpdateProductParams = (): UpdateProductParams => ({
  photo: faker.image.url(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  category: faker.commerce.productAdjective(),
  promotionalDescription: faker.commerce.productDescription(),
  promotionalPrice: faker.commerce.price(),
  promotionalDays: faker.date.weekday(),
  promotionalHours
})
