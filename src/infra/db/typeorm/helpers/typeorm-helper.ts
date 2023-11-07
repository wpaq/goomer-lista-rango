import { typeorm } from './data-source'

import { type DataSource } from 'typeorm'

export const TypeormHelper = {
  client: typeorm,

  async connect (typeorm: DataSource) {
    await typeorm.initialize()
    this.client = typeorm
  },

  async disconnect (typeorm: DataSource) {
    await typeorm.destroy()
  }
}
