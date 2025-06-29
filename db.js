//Este archivo va a manejar la conexión con la base de datos clinica:

// db.js
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',      // o el host donde esté la base de datos
  user: 'root',           // tu usuario de MySQL
  password: '',           // tu contraseña
  database: 'clinica'     // nombre de la base de datos
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err.stack);
    return;
  }
  console.log('Conectado a la base de datos clinica.');
});

module.exports = connection;
