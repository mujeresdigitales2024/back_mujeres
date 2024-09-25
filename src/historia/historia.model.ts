import mongoose, { Mongoose } from "mongoose";
import { IUsers } from "src/users/users.modelo";


export const HistoriaSchema = new mongoose.Schema({
    Fecha: Date,
    Usuario: {type: mongoose.SchemaTypes.ObjectId, ref: "Users"}
})

export interface IHistoria extends mongoose.Document{
    Fecha: Date;
    Usuario: IUsers
}