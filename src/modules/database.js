const mysql2 = require('mysql2')
const log = require('./logger')
require('dotenv').config()

let db = mysql2.createConnection({
    host: '10.0.100.2',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

setInterval(() => {
    db.execute('SHOW TABLES', (err,results,fiels) => {
        if(err != null) {
            console.log(results);
            console.log(err);
        }
    })
    log('DATABASE','keep-alive request sent')
}, 120000);

module.exports = db;