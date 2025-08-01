// 05 - Crie uma função chamada consultarPaciente que receba um nome de paciente e retorne uma Promise. 
// A Promise deverá:
// Resolver com a mensagem: "Consulta para [nome] agendada com sucesso."
// Rejeitar com a mensagem: "Erro: nome do paciente não pode ser vazio." se o nome for uma string vazia.
// Em seguida, use o .then() e .catch() para exibir a mensagem no console.

const consultarPaciente= (nome) => {
  return new Promise((resolve, reject) => {
    if (nome.trim() !== "") {
      resolve(`Consulta para ${nome} agendada com sucesso.`);
    } else {
      reject("Erro: nome do paciente não pode ser vazio.");
    }
  });
};

const nomePaciente ="Tiago"; 

consultarPaciente(nomePaciente)
  .then(mensagem => console.log(mensagem))
  .catch(erro => console.log(erro));
