import express from 'express';
import {userRouter} from './routes/index.js'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/users',userRouter)


export {app}
