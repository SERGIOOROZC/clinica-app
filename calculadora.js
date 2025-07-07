
// funciones a exportar
//Exporta 4 funciones (sumar, restar, multiplicar, dividir) con validación numérica.
//Si hay error, lanza un mensaje claro.
//Exporta por defecto la función info() que describe la utilidad del módulo.

function validarNumeros(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('❌ Ambos parámetros deben ser valores numéricos.');
  }
}

export function sumar(a, b) {
  validarNumeros(a, b);
  return a + b;
}

export function restar(a, b) {
  validarNumeros(a, b);
  return a - b;
}

export function multiplicar(a, b) {
  validarNumeros(a, b);
  return a * b;
}

export function dividir(a, b) {
  validarNumeros(a, b);
  if (b === 0) {
    throw new Error('❌ No se puede dividir por cero.');
  }
  return a / b;
}

// Exportación por defecto: info()
export default function info() {
  console.log('🧮 Este módulo permite realizar operaciones básicas de matemática: suma, resta, multiplicación y división.');
}
