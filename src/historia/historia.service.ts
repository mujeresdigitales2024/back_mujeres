import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IHistoria } from './historia.model';
import { IUsers } from 'src/users/users.modelo';
import { UsersService } from 'src/users/users.service';
import { HistoriaDto } from './historia.dto';

@Injectable()
export class HistoriaService {

// CRUD

constructor (@InjectModel('Historias') private readonly historiaModel: Model<IHistoria>,
@InjectModel('Users') private readonly usersModel: Model<IUsers>,
private usersService: UsersService
){}

// Metodo Crear

async CrearHistoria(id_User: string , historia:HistoriaDto): Promise <IHistoria>{
    const usuario= await this.usersService.BuscarxCedula(id_User)
    if (usuario){
        historia.Usuario = usuario
        const historiaCreada=  new this.historiaModel(historia)
        return await historiaCreada.save()
    }
    return null
}

}
