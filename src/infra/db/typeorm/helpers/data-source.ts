import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { LogError, Restaurant } from '../entities'

if ((process.env.NODE_ENV || '').trim() !== 'development') {
  process.env.DATABASE_URL = 'postgres://postgres:admin@localhost:5432/goomer-lista-rango'
}

if ((process.env.NODE_ENV || '').trim() !== 'test') {
  process.env.DATABASE_URL = 'postgres://postgres:admin@localhost:5432/goomer-lista-rango-test'
}

export const TypeormDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Restaurant, LogError],
  migrations: ['src/infra/db/typeorm/migrations/*.{ts,js}'],
  migrationsRun: true,
  subscribers: []
})
