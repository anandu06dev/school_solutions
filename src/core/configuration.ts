export default () => ({
    port: parseInt(process.env.PORT),
    database: {
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DATABASE_NAME,
    },
})
