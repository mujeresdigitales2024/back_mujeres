import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoriaModule } from './historia/historia.module';

@Module({
  imports:
   [
    MongooseModule.forRoot('mongodb+srv://Admin:Diana0221*@cluster0.q6wuo.mongodb.net/MujeresDigitales'),
    UsersModule,
    HistoriaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
