import {userModel} from '../models/index.js'

const findById = (id) => userModel.findById(id)

const findMany = ()=> userModel.find()

const findOne = (query) => userModel.findOne(query)

const createUser = (user)=> new userModel(user).save()

const updateUserById = (id, value)=> userModel.findByIdAndUpdate(id,value)

const setUserById = (id,user)=> userModel.findOneAndReplace(id,user)

const deleteUserById = (id) => userModel.findByIdAndDelete(id)

export {deleteUserById,updateUserById,createUser,findOne,findById,findMany,setUserById}