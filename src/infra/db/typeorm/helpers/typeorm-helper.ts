import { PostgresDataSource, PostgresDataSourceTest } from './'

export const TypeormHelper = {
  client: PostgresDataSource,

  async connect (database?: string) {
    if (database === 'test') {
      this.client = PostgresDataSourceTest
    }
    await this.client.initialize()
  },

  async disconnect () {
    await this.client.destroy()
  }
}
