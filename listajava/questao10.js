// 10 - Implemente uma função que recebe um callback e executa esse callback após 3
// segundos, imprimindo uma mensagem antes e depois da execução.

function executarComDelay(callback){
  console.log("Preparando para executar o callback...");
  setTimeout(() =>{
    callback();
    console.log("Callback executado após 3 segundos.");
  }, 3000);
}

executarComDelay(() => {
  console.log("Esta é a função callback rodando!");
});
