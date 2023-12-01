import 'dotenv/config'
import 'reflect-metadata'
import path from 'path'
import { DataSource } from 'typeorm'

let url: string = ''

if (process.env.DATABASE_URL_DEVELOPMENT) {
  url = process.env.DATABASE_URL_DEVELOPMENT
}

if ((process.env.NODE_ENV || '').trim() === 'test') {
  url = process.env.DATABASE_URL_TEST as string
}

export const TypeormDataSource = new DataSource({
  type: 'postgres',
  url,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, '../entities/**')],
  migrations: [path.join(__dirname, '../migrations/**')],
  migrationsRun: true,
  subscribers: []
})
