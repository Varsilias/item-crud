import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ItemsModule } from './items/items.module';

/* eslint-disable */

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot("mongodb://localhost:27017/test"),

    ItemsModule,
  
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
