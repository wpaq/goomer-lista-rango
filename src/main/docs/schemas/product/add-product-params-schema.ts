export const addProductParamsSchema = {
  type: 'object',
  properties: {
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
    restaurantId: {
      type: 'string',
      format: 'uuid'
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
  required: ['photo', 'name', 'price', 'category', 'restaurantId']
}
