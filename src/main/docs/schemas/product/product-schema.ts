export const productSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'string',
      format: 'uuid'
    },
    photo: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    price: {
      type: 'string'
    },
    category: {
      type: 'string'
    },
    promotionalDescription: {
      type: 'string'
    },
    promotionalPrice: {
      type: 'string'
    },
    promotionalDays: {
      type: 'string'
    },
    promotionalHours: {
      type: 'string'
    }
  },
  required: ['id', 'photo', 'name', 'price', 'category']
}
