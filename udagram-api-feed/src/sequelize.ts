import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';
import fs from 'fs';

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  dialect: config.dialect as any, // Cast to `any` to satisfy TypeScript if needed
  storage: ':memory:',
  dialectOptions: {
    ssl: {
      require: true, // Enforce SSL
      rejectUnauthorized: false, // Disable strict SSL validation (use true for stricter security)
    },
  },
});
