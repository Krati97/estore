import {TypeOrmModuleOptions} from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: '123',
    host:  'localhost',
    database: 'comm',
    synchronize: true,
    entities: ["dist/**/*.entity{.ts,.js}"],

}