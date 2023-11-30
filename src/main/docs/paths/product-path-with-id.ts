export const productPathWithId = {
  put: {
    tags: ['Product'],
    summary: 'API para atualizar um product',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    parameters: [{
      in: 'path',
      name: 'productId',
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
            $ref: '#/schemas/updateProductParams'
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
  },

  delete: {
    tags: ['Product'],
    summary: 'API para deletar um product',
    description: 'Essa rota pode ser executada por **qualquer usuário**',
    parameters: [{
      in: 'path',
      name: 'productId',
      required: true,
      schema: {
        type: 'string',
        format: 'uuid'
      }
    }],
    responses: {
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
  }
}
