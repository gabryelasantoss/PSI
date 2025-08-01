// 09 - Faça um algoritmo que receba a idade do usuário e informe se ele é criança (0-12),
// adolescente (13-17), adulto (18-59) ou idoso (60+).

let idade=-12;

if (idade >= 0 && idade <= 12) {
  console.log("Criança");
} else if(idade >= 13 && idade <= 17) {
  console.log("Adolescente");
} else if(idade >= 18 && idade <= 59) {
  console.log("Adulto");
} else if (idade >= 60) {
  console.log("Idoso");
} else {
  console.log("Idade inválida");
}
