import { type ProductModel } from '@/domain/models'

export type UpdateProductParams = {
  photo?: string
  name?: string
  price?: string
  category?: string
  promotionalDescription?: string
  promotionalPrice?: string
  promotionalDays?: string
  promotionalHours?: string
}

export interface UpdateProduct {
  update: (id: string, data: UpdateProductParams) => Promise<ProductModel>
}
