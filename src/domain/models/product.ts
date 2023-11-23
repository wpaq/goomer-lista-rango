export type ProductModel = {
  id: string
  photo: string
  name: string
  price: number
  category: string
  promotionalDescription?: string
  promotionalPrice?: number
  promotionalDays?: string
  promotionalHours?: string
}
