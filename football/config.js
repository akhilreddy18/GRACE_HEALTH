const dotenv = require('dotenv').config()

let host = ""
let user = ""
let port = ""
let password = ""
let database = ""

if(process.env.NODE_ENV == 'development') {
    console.log("dev environment")
    host = process.env.MYSQL_HOST,
    user = process.env.MYSQL_USER,
    port = process.env.MYSQL_PORT,
    password = process.env.MYSQL_PASSWORD,
    database = process.env.MYSQL_DATABASE,
    node_port = process.env.NODE_PORT
}

module.exports = {
    host, user, port, password, database, node_port
}