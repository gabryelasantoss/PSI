// 08 - Crie uma função que recebe um array de números e retorne um novo array contendo
// apenas os números maiores que 10.

function filtrarMaioresQueDez(array){
  return array.filter(numero => numero > 10);
}

let numeros=[5, 12, 8, 20, 3, 15];
let maioresQueDez=filtrarMaioresQueDez(numeros);

console.log(maioresQueDez); 
