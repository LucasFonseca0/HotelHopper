import { Module } from '@nestjs/common';
import { HotelModule } from './hotel/hotel.module';


@Module({
  imports: [HotelModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
 