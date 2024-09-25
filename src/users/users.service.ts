import { Injectable } from '@nestjs/common';
import { UsersDto } from './users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { IUsers } from './users.modelo';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
 
    constructor(@InjectModel('Users') private usersModel: Model<IUsers>){}

    pruebaInicialGet(): string{
        return "Este es el Get"
    }
// mETODO CREAR
    async CrearUser(user: UsersDto): Promise <IUsers>{
        const creacion= new this.usersModel(user)
        return await creacion.save()
    }

   //METODO CONSULTAR X CEDULA 
    async BuscarxCedula(ced: string): Promise <IUsers>{
        try {
            const UsuarioEncontrado= await this.usersModel.findOne({Num_Id:ced}).exec();
          
                return UsuarioEncontrado

        } catch (error) {
            console.error(error)
            return null
        }
    }

    //METODO BUSCAR TODOS
    async ObtenerTodos(): Promise<IUsers[]>{
        return await this.usersModel.find().exec()
    }

    async EliminarUser(ced: string): Promise<any>{
        const respuesta = await this.usersModel.deleteOne({Num_Id:ced})
        if (respuesta.deletedCount===1){
            return respuesta
        }return null
    }
}
