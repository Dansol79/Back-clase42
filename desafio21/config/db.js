import mongoose from "mongoose";

const conectarDB = async () =>{
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI,
                                                  {
                                                    useNewUrlParser:true,
                                                    useUnifiedTopology: true

                                                  });
        const url = `${connection.connection.host}:${connection.connection.port}`; 
        console.log('Conectada a base de datos con exito')
    }catch(error){
        console.log(error)
        process.exis(1);
    }
}

export default conectarDB;