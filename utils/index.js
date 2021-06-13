const port = 3333
const hostname = 'localhost'
const db_host = process.env.DB_HOST || 'localhost'
const db_port = process.env.DB_PORT || '27017'


export {db_host, db_port, port, hostname} 