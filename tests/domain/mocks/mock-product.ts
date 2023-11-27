import { type ProductModel } from '@/domain/models'
import { UpdateProductParams, type AddProductParams } from '@/domain/usecases'

import { faker } from '@faker-js/faker'

export const mockProductModel = (): ProductModel => ({
  id: faker.string.uuid(),
  photo: faker.image.url(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  category: faker.commerce.productAdjective(),
  promotionalDescription: faker.commerce.productDescription(),
  promotionalPrice: faker.commerce.price(),
  promotionalDays: faker.date.weekday(),
  promotionalHours: faker.string.numeric(2)
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
  promotionalHours: faker.string.numeric(2)
})

export const mockUpdateProductParams = (): UpdateProductParams => ({
  photo: faker.image.url(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  category: faker.commerce.productAdjective(),
  promotionalDescription: faker.commerce.productDescription(),
  promotionalPrice: faker.commerce.price(),
  promotionalDays: faker.date.weekday(),
  promotionalHours: faker.string.numeric(2)
})
