import 'dotenv/config'
import 'reflect-metadata'
import path from 'path'
import { DataSource } from 'typeorm'

let url: string = process.env.DATABASE_URL_PROD as string

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
