export const restaurantSchema = {
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
    address: {
      type: 'string'
    },
    openingHours: {
      type: 'string'
    }
  },
  required: ['id', 'photo', 'name', 'address', 'openingHours']
}
