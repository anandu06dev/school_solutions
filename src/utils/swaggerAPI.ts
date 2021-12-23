import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

export function createSwaggerAPI(app: INestApplication) {
    const config = new DocumentBuilder()
        .setTitle('School solutions')
        .setDescription('School ERP solutions')
        .setVersion('1.0')
        .addBearerAuth(
            { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
            'access-token'
        )
        .build()
    const document = SwaggerModule.createDocument(app, config, {})
    SwaggerModule.setup('api', app, document)
}
