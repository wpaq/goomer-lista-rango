export const restaurantPathWithId = {
  get: {
    tags: ['Restaurant'],
    summary: 'API para listar um restaurant por id',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    parameters: [{
      in: 'path',
      name: 'restaurantId',
      required: true,
      schema: {
        type: 'string',
        format: 'uuid'
      }
    }],
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/restaurant'
            }
          }
        }
      },
      204: {
        description: 'Sucesso, mas sem dados para exibir'
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  },

  put: {
    tags: ['Restaurant'],
    summary: 'API para atualizar um restaurant',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    parameters: [{
      in: 'path',
      name: 'restaurantId',
      required: true,
      schema: {
        type: 'string',
        format: 'uuid'
      }
    }],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/schemas/updateRestaurantParams'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'Sucesso',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/restaurant'
            }
          }
        }
      },
      403: {
        $ref: '#/components/forbidden'
      },
      404: {
        $ref: '#/components/notFound'
      },
      500: {
        $ref: '#/components/serverError'
      }
    }
  }
}
