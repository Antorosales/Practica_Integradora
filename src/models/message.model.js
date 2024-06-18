import mongoose from "mongoose";

const messageCollection = "Mensajes"


//esquema que debe tener la coleccion de usuarios para rellenar los campos

const messageSchema = new mongoose.Schema({

    user: { type:String},
    message: { type:String},
    

})


const messageModel = mongoose.model(messageCollection, messageSchema)


export default messageModel