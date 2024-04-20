const mysql = require('mysql2')

const pool = mysql.createPool({
  host: 'localhost',
  user: 'D5_Abhishek_83636',
  password: '123Abhi@1999',
  port: 3306,
  database: 'DAC',
  connectionLimit: 10,
})

module.exports = {
  pool,
}
