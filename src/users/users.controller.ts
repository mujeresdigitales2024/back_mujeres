import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersDto } from './users.dto';

@Controller('users')
export class UsersController {
    constructor (private readonly usersService: UsersService){}



@Post()
async crearUser(@Body() userDto: UsersDto){

  const respuesta=await this.usersService.CrearUser(userDto)
  return {ok: true, respuesta}
}

@Get('/:ced')
async consultarUser(@Param("ced") ced:string){
 return await this.usersService.BuscarxCedula(ced)
}

@Get()
async consultarTodos(){
    return await this.usersService.ObtenerTodos()
}

@Delete("/:ced")
async eliminar(@Param('ced') ced: string){
    const eliminar= await this.usersService.EliminarUser(ced)
    if(eliminar!=null){
        return "exitoso"
    }return "el user no existe"
}
}
