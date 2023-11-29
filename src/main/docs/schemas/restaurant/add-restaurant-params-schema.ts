export const addRestaurantParamsSchema = {
  type: 'object',
  properties: {
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
      type: 'string',
      example: '00:00'
    }
  },
  required: ['photo', 'name', 'address', 'openingHours']
}
