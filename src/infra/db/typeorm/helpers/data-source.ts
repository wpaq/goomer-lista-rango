import 'module-alias/register'
import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'

import { LogError, Restaurant } from '@/infra/db/typeorm/entities'

if (process.env.NODE_ENV === 'development') {
  process.env.DATABASE_URL = 'postgres://typeorm:password@localhost:5432/goomer-lista-rango'
}

if (process.env.NODE_ENV === 'test') {
  process.env.DATABASE_URL = 'postgres://typeorm:password@localhost:5432/goomer-lista-rango-test'
}

export const TypeormDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [Restaurant, LogError],
  migrations: ['@/infra/db/typeorm/migrations/*.{ts,js}'],
  migrationsRun: true,
  subscribers: []
})
