import mongoose from 'mongoose'
const mongooseConnect = (params)=>{
    try {
        return mongoose.connect(params,{useNewUrlParser:true})
    } catch (error) {
        // console.log(error);
        throw new Error(error.message)
    }
    
}

export {mongooseConnect}
