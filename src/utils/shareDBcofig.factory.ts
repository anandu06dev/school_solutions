export const dbConfigSetUp = (configService: any): { [key: string]: any } => {
    return {
        type: 'mysql',
        host: configService.get('DATABASE_HOST'),
        port: configService.get('DATABASE_PORT'),
        username: configService.get('DB_USER_NAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DATABASE_NAME'),
        autoLoadEntities: true,
        synchronize: false,
    }
}
