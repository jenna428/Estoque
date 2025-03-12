import { DataSourceOptions } from 'typeorm';
import { join } from 'path';
require('dotenv').config({ path: '.env' });

export const ormConfig: DataSourceOptions = {
  type: 'sqlite',
  //type: 'mysql',
  //host: process.env.DB_HOST,
  //port: parseInt(process.env.DB_PORT, 10),
  //username: process.env.DB_USER,
  //password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '../entity/*.entity{.ts,.js}')],
  logging: true,
  synchronize: true,
};