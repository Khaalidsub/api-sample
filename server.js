import {createServer}from 'http'
import {app} from './app.js'
import {db_host,db_port,hostname,port} from './utils/index.js'
import {mongooseConnect} from './mongodb/index.js'

const server = createServer(app)


const bootstrap = () =>{
    mongooseConnect(`mongodb://${db_host}:${db_port}/api_sample`).then((vale)=>console.log('mongodb connected'))
    server.listen(port,()=>{
        console.log(`Server listening on port ${port}`);
    })
}


bootstrap()
