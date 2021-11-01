import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'v4n97GDBLLbLf6SV',
  database: process.env.DB_NAME || 'test_db',
  synchronize: false, //!process.env.DB_NO_SYNC,
  autoLoadEntities: false,
  logging: false, //!process.env.DB_NO_LOGS,
  keepConnectionAlive: true,
  retryAttempts: Number.MAX_VALUE,
  retryDelay: 2000,
  entities: ['dist/**/*.entity.js'],
};
