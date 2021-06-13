import mongoose from 'mongoose';

const userModel = mongoose.model('User',{name:String,email:String,password:String});

export {userModel}