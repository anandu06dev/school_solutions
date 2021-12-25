import { ConnectionOptions } from 'typeorm'

// You can load you .env file here synchronously using dotenv package (not installed here),
// import * as dotenv from 'dotenv';
// import * as fs from 'fs';
// const environment = process.env.NODE_ENV || 'development';
// const data: any = dotenv.parse(fs.readFileSync(`${environment}.env`));
// You can also make a singleton service that load and expose the .env file content.
// ...
// npm run typeorm:cli -- migration:create -n UserFullName
// Check typeORM documentation for more information.
const config: ConnectionOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3333,
    username: 'root',
    password: 'qabogprt',
    database: 'app_schl_dev',
    entities: [
        __dirname + '/**/*.entity{.ts,.js}',
        'src/**/*.entity.ts',
        'dist/**/*.entity.js',
    ],

    // We are using migrations, synchronize should be set to false.
    synchronize: false,

    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: true,
    logging: true,
    logger: 'file',

    // Allow both start:prod and start:dev to use migrations
    // __dirname is either dist or src folder, meaning either
    // the compiled js in prod or the ts in dev.
    migrations: [
        __dirname + '/migrations/**/*{.ts,.js}',
        'src/migration/**/*.ts',
        'dist/migration/**/*.js',
    ],
    subscribers: ['src/subscriber/**/*.ts', 'dist/subscriber/**/*.js'],
    cli: {
        // Location of migration should be inside src folder
        // to be compiled into dist/ folder.
        migrationsDir: 'src/migrations',
        entitiesDir: 'src',

        subscribersDir: 'src/subscriber',
    },
}

export = config

// npm run typeorm:cli -- migration:create -n UserFullName
