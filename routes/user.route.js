import {createUser,findMany,findById,updateUserById,setUserById,deleteUserById } from '../services/index.js'
import {Router} from 'express'
const userRouter = Router()
// endpoint implementations

userRouter.get('/',async (req, res) =>{
  const users =await findMany()
  res.send(users)
})

userRouter.get('/:id',async (req, res) =>{
 const id = req.params.id
 const users = await findById(id)
 res.send(users)
})


userRouter.post('/',async (req, res)=>{
    const user = req.body
    const newUser = await createUser(user)
    res.send(newUser)
})

// {name:'john', email:'john@', password:'pass'} before
// {name:'doe', email:'doe@'} after put
userRouter.put('/:id',async (req, res)=>{
    const id = req.params.id
    const editedUser = req.body
    const updatedUser = await setUserById(id,editedUser)
    res.send(updatedUser)
})
// {name:'john', email:'john@', password:'pass'} before
// {password : '123456'} the body
// {name:'john', email:'john@', password:'123456'} after
userRouter.patch('/:id',async (req, res)=>{
    const id = req.params.id
    const data = req.body
    const updateUser = await updateUserById(id,data)
    res.send(updateUser)
})

userRouter.delete('/:id',async (req, res)=>{
 const id = req.params.id
 const deleteUser = await deleteUserById(id)
 res.send(deleteUser)
})

export {userRouter}