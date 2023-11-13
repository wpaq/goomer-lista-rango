import 'dotenv/config'
import 'reflect-metadata'
import path from 'path'
import { DataSource } from 'typeorm'

if ((process.env.NODE_ENV || '').trim() === 'development') {
  process.env.DATABASE_URL = 'postgres://postgres:admin@localhost:5432/goomer-lista-rango'
}

if ((process.env.NODE_ENV || '').trim() === 'test') {
  process.env.DATABASE_URL = 'postgres://postgres:admin@localhost:5432/goomer-lista-rango-test'
}

export const TypeormDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, '../entities/**')],
  migrations: [path.join(__dirname, '../migrations/**')],
  migrationsRun: true,
  subscribers: []
})
