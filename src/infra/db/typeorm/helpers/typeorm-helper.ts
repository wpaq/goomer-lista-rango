import { TypeormDataSource } from './data-source'

export const TypeormHelper = {
  client: TypeormDataSource,

  async connect () {
    await this.client.initialize()
  },

  async disconnect () {
    await this.client.destroy()
  }
}
