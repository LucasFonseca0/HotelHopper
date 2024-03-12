import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';



require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(process.env.DB_URI), AuthModule, UserModule],
  controllers: [AppController],
  providers:[ 
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }
  ]
})
export class AppModule {}
