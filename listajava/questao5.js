// 05 - Utilize if/ else if e else para receber um horário do dia 
// e informar “bom dia”, “boa tarde”, “boa noite” ou “boa madrugada”.

let horario=8;

if (horario >= 6 && horario < 12) {
  console.log("Bom dia");
} else if (horario >= 12 && horario < 18) {
  console.log("Boa tarde");
} else if (horario >= 18 && horario < 24) {
  console.log("Boa noite");
} else if(horario >= 0 && horario < 6) {
  console.log("Boa madrugada");
} else{
  console.log("Horário inválido");
}
