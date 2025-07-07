// consultas.js a la base de datos

import db from './db.js';  // notar el .js al final

// 1. Listar todos los pacientes con sus teléfonos
function getTelefonos() {
  const sql = `SELECT nombre, apellido, telefono FROM paciente`;
  db.query(sql, (err, results) => {
    if (err) throw err;
    console.log('📞 Teléfonos de los pacientes:');
    console.table(results);
  });
}

// 2.
function getTelefonoPaciente(numero_historial) {
  const sql = `SELECT telefono FROM paciente WHERE nro_historial_clinico = ?`;
  db.query(sql, [numero_historial], (err, results) => {
    if (err) {
      console.error('❌ Error en la consulta:', err.message);
      return;
    }

    if (results.length === 0) {
      console.log(`⚠️ No se encontró ningún paciente con historial ${numero_historial}.`);
    } else {
      const telefono = results[0].telefono;
      console.log(`📱 Teléfono del paciente ${numero_historial}: ${telefono}`);
    }
  });
}

// 3. Obtener médicos que atendieron a un paciente
function getMedicosPaciente(numero_historial) {
  const sql = `
    SELECT m.nombre, m.apellido
    FROM medicos m
    INNER JOIN ingresos i ON m.matricula = i.matricula
    INNER JOIN paciente p ON i.nro_historial_medico = p.nro_historial_clinico
    WHERE p.nro_historial_clinico = ?
  `;
  db.query(sql, [numero_historial], (err, results) => {
    if (err) throw err;
    console.log(`👨‍⚕️ Médicos que atendieron al paciente ${numero_historial}:`);
    if (results.length === 0) {
      console.log('⚠️ No se encontraron médicos para este paciente.');
    } else {
      console.table(results);
    }
  });
}

// Ejemplo de uso de las funciones 
 getTelefonos();
// getTelefonoPaciente(1884);
// getMedicosPaciente(123);

// EJECUTO CON TERMINAL
// node consultas.js


// cambios echos -> const db = require('./db'); → import db from './db.js';