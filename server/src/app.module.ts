import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { HotelModule } from './hotel/hotel.module';



require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI), AuthModule, UserModule, HotelModule],
  controllers: [AppController],
  providers:[ 
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ]
})
export class AppModule {}
