import mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema(
    {
  Tipo_Id: String,
  Num_Id: String,
  Nombres: String,
  Apellidos: String,
  Edad: Number,
  Sexo: String,
  Direccion: String,
  Acompañante: String,
  Telefono: String,
  Telefono_Acompañante: String,
  Estado_Civil: String,
  Seguridad_Social: String,
  Entidad_pago: String
}
);

export interface IUsers extends mongoose.Document{
    Tipo_Id: string;
    Num_Id: string;
    Nombres: string;
    Apellidos: string;
    Edad: number;
    Sexo: string;
    Direccion: string;
    Acompañante: string;
    Telefono: string;
    Telefono_Acompañante: string;
    Estado_Civil: string;
    Seguridad_Social: string;
    Entidad_pago:string;
}

