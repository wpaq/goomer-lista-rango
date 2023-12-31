export const updateRestaurantParamsSchema = {
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
  }
}
