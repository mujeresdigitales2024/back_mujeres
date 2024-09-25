import { Body, Controller, Param, Post } from '@nestjs/common';
import { HistoriaDto } from './historia.dto';
import { HistoriaService } from './historia.service';

@Controller('historia')
export class HistoriaController {

    constructor(private historiaService: HistoriaService){}

    @Post('/:ced')
    async CrearHistoria(@Param('ced') ced: string, @Body() historiaDto: HistoriaDto ){
        const historiaCreada= await  this.historiaService.CrearHistoria(ced, historiaDto)
       if (historiaCreada){
        return {ok:true, historiaCreada}
       }return { KO:"El usUARIO NO EXISTE"}
    }
}
