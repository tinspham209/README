import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

export const ACCESS_SECRET = process.env.ACCESS_SECRET || 'mysupersecret'
export const PORT = process.env.PORT || 3000
export const DATABASE =
  process.env.DATABASE_URL || 'postgres://USER:PASSWORD@localhost:5432/DATABASE'
export const DATABASE_TEST =
  process.env.DATABASE_TEST ||
  'postgres://USER:PASSWORD@localhost:5432/DATABASE_TEST'
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const BUCKET_TYPE = process.env.BUCKET_TYPE || 'firebase'
export const URL_FRONT = process.env.URL_FRONT || 'localhost'
export const EXPIRE_TIME = process.env.EXPIRE_TIME || 1200
export const LOGGER_NAME = process.env.LOGGER_NAME || 'boilerplate'
