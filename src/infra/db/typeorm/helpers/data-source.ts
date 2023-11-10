import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { LogError, Restaurant } from '@/infra/db/typeorm/entities'

export const PostgresDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT as number | undefined,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Restaurant, LogError],
  migrations: ['@/infra/db/typeorm/migrations/*.{ts,js}'],
  migrationsRun: true,
  subscribers: []
})
