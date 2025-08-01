// 02 - Crie uma função chamada executarOperacao que receba dois números e uma função de callback. 
// A função executarOperacao deve executar o callback passando os dois números como argumentos e retornar o resultado. 
// Em seguida, crie duas funções de callback usando arrow functions para: 
// - somar dois números e retornar o valor. 
// - multiplicar dois números e retornar o valor.

const executarOperacao=(num1, num2, callback) => {
  return callback(num1, num2);
};

const somar=(a, b) => a + b;
const multiplicar=(a, b) => a * b;

const numero1=10;
const numero2=5;

console.log("Soma:", executarOperacao(numero1, numero2, somar));

console.log("Multiplicação:", executarOperacao(numero1, numero2, multiplicar));

