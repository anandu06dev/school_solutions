import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import { createSwaggerAPI } from '@utils/swaggerAPI'
import { AppModule } from './app.module'
import * as helmet from 'helmet'
import * as RateLimit from 'express-rate-limit'
async function bootstrap() {
    const app = await NestFactory.create(
        AppModule,

        new ExpressAdapter(),
        { cors: true }
    )
    app.use(helmet())
    app.use(RateLimit({ windowMs: 15 * 60 * 1000, max: 200 }))
    // app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector))
    // app.useGlobalFilters(
    //     new HttpExceptionFilter(reflector),
    //     new QueryFailedFilter(reflector)
    // )
    app.useGlobalPipes(
        new ValidationPipe({
            transform: true,
            whitelist: true,
            validationError: {
                target: true,
            },
        })
    )
    createSwaggerAPI(app)
    await app.listen(3000)
    console.log(`Application is running on: ${await app.getUrl()}`)
}
bootstrap()
