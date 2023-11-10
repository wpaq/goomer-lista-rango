import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

export const PostgresDataSourceTest = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST_TEST,
  port: process.env.DB_PORT_TEST as number | undefined,
  username: process.env.DB_USERNAME_TEST,
  password: process.env.DB_PASSWORD_TEST,
  database: process.env.DB_NAME_TEST,
  synchronize: true,
  logging: false,
  entities: ['../entities/*.{ts,js}'],
  migrations: ['../migrations/*.{ts,js}'],
  migrationsRun: true,
  subscribers: []
})
