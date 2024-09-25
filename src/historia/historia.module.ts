import { Module } from '@nestjs/common';
import { HistoriaService } from './historia.service';
import { HistoriaController } from './historia.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HistoriaSchema } from './historia.model';
import { UsersSchema } from 'src/users/users.modelo';
import { UsersService } from 'src/users/users.service';

@Module({
  imports : [MongooseModule.forFeature([
    {name: "Historias", schema: HistoriaSchema},
    {name: 'Users', schema: UsersSchema}
  ])],
  providers: [HistoriaService, UsersService],
  controllers: [HistoriaController]
})
export class HistoriaModule {}
