import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const typeorm = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT as number | undefined,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  entities: [],
  migrations: [],
  subscribers: []
})
