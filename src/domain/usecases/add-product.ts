import { type ProductModel } from '@/domain/models'

export type AddProductParams = {
  photo: string
  name: string
  price: string
  category: string
  restaurantId: string
  promotionalDescription?: string
  promotionalPrice?: string
  promotionalDays?: string
  promotionalHours?: string
}

export interface AddProduct {
  add: (data: AddProductParams) => Promise<ProductModel | boolean>
}
