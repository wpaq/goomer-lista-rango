import paths from './paths'
import components from './components'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'goomer-lista-rango',
    description: 'Essa é a documentação da API goomer-lista-rango',
    version: '1.0.0',
    contact: {
      name: 'Wallyson Pablo',
      email: 'wallysonpabloo@gmail.com',
      url: 'https://www.linkedin.com/in/wallyson-pablo'
    },
    license: {
      name: 'GPLv3 License',
      url: 'https://opensource.org/license/gpl-3-0/'
    }
  },
  servers: [{
    url: '/api',
    description: 'Servidor Principal'
  }],
  tags: [{
    name: 'Restaurant',
    description: 'APIs relacionadas ao Restaurant'
  }, {
    name: 'Product',
    description: 'APIs relacionadas ao Product'
  }],
  paths,
  schemas,
  components
}
