// 06 - Crie uma lista com 10 números, e em seguida, crie um laço de repetição
// para varrer todos os elementos da lista e armazenar os valores pares e os ímpares
// em uma nova lista separada.

let numeros=[12, 7, 9, 18, 24, 33, 40, 55, 60, 71];
let pares=[];
let impares=[];

numeros.forEach(num => {
  if (num % 2 === 0) {
    pares.push(num);
  } else {
    impares.push(num);
  }
});

console.log("Números pares: " + pares);
console.log("Números ímpares: " + impares);
