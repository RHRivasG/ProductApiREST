import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ProductModule } from "./product/product.module";
import { ConfigModule } from "./config/config.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigService } from "./config/config.service";
import { Configuration } from "./config/config.keys";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        host: configService.get(Configuration.DB_HOST),
        port: 5432,
        username: configService.get(Configuration.DB_USERNAME),
        password: configService.get(Configuration.DB_PASSWORD),
        database: configService.get(Configuration.DB_DATABASE),
        entities: [__dirname + "/**/*.entity{.ts,.js}"],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ProductModule,
    ConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
