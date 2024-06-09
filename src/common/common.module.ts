import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Pool } from 'pg';
import mysql from 'mysql2/promise';

export const PG_CONNECTION = 'PG_CONNECTION';
export const MYSQL_CONNECTION = 'MYSQL_CONNECTION';

const dbPgProvider = {
  provide: PG_CONNECTION,
  useValue: new Pool({
    user: process.env.PG_DB_USERNAME,
    host: process.env.PG_DB_HOSTNAME,
    database: process.env.PG_DB_NAME,
    password: process.env.PG_DB_PASSWORD,
    port: Number(process.env.PG_DB_PORT),
  }),
};

const dbMysqlProvider = {
  provide: MYSQL_CONNECTION,
  useValue: mysql.createPool({
    host: process.env.MYSQL_DB_HOSTNAME,
    port: Number(process.env.MYSQL_DB_PORT),
    user: process.env.MYSQL_DB_USERNAME,
    password: process.env.MYSQL_DB_PASSWORD,
    database: process.env.MYSQL_DB_NAME,
    timezone: '+07:00',
    multipleStatements: true,
  }),
};

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: `${process.env.JWT_EXPIRESIN}s` },
    }),
  ],
  providers: [dbPgProvider, dbMysqlProvider],
  exports: [dbPgProvider, dbMysqlProvider],
})
export class CommonModule {}
