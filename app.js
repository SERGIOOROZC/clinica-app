

// importamos las funciones desde calculadora.js

import info, { sumar, restar, multiplicar, dividir } from './calculadora.js';

// Mostrar mensaje de info del módulo
info();

function calcular(operacion, a, b) {
  try {
    let resultado;

    switch (operacion) {
      case 'sumar':
        resultado = sumar(a, b);
        break;
      case 'restar':
        resultado = restar(a, b);
        break;
      case 'multiplicar':
        resultado = multiplicar(a, b);
        break;
      case 'dividir':
        resultado = dividir(a, b);
        break;
      default:
        console.log(`⚠️ Operación "${operacion}" no reconocida.`);
        return;
    }

    console.log(`✅ Resultado de ${operacion}(${a}, ${b}): ${resultado}`);
  } catch (error) {
    console.error('❌ Error al calcular:', error.message);
  }
}

// 🧪 Pruebas:
calcular('sumar', 5, 3);
calcular('restar', 10, 4);
calcular('multiplicar', 6, 7);
calcular('dividir', 20, 5);

// 🔥 Prueba con error
calcular('dividir', 8, 0);
calcular('sumar', 'a', 3);
calcular('potencia', 2, 3); // operación no válida
