const { Pool } = require('pg')

const pool = new Pool({
    host:'db',
    port: 5432,
    user: 'admin',
    password: 'brinkdoorstopremindfulhedge',
    database: 'skyepedia'
})


module.exports = pool