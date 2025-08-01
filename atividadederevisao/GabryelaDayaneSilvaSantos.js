// Gabryela Dayane Silva Santos - Atividade de Revisão JavaScript

// Questão 1
function questao1(){
    console.log("Bem-vindo à nossa loja online!");
}

// Questão 2
function questao2(){
    let precoProduto=59.90;         
    const nomeProduto="Camiseta";   
    let disponivel=true;             
    console.log("Preço:", precoProduto);
    console.log("Produto:", nomeProduto);
    console.log("Disponível:", disponivel);
}

// Questão 3
function questao3(){
    let precoOriginal=100;
    let desconto=0.15;
    let quantidade=3;

    let valorComDesconto=precoOriginal-(precoOriginal*desconto);
    let valorTotal=valorComDesconto*quantidade;
    let valorComFrete=valorTotal+20; 
    console.log("Preço com desconto:", valorComDesconto.toFixed(2));
    console.log("Valor total (quantidade x preço com desconto):", valorTotal.toFixed(2));
    console.log("Valor total com frete:", valorComFrete.toFixed(2));
}

// Questão 4
function questao4(){
    const nomeCliente="Gabryela";
    console.log("Bem-vindo, "+nomeCliente+"! Aproveite suas compras.");
}

// Questão 5
function questao5(){
    let carrinho=["Camisa","Calça","Tênis","Boné","Meias"];
    let posicaoExcluir=2;
    let itemExcluido=carrinho.splice(posicaoExcluir,1); 
    console.log("Você excluiu do carrinho o item:", itemExcluido[0]);
    console.log("Carrinho atualizado:", carrinho);
}

// Questão 6
function questao6(){
    let precoProduto=150;
    let dinheiroCliente=120;

    if(dinheiroCliente>=precoProduto){
        console.log("Compra efetuada com sucesso!");
    }else{
        console.log("Saldo insuficiente para a compra.");
    }
}

// Questão 7
function questao7(){
    let limiteEstoque=10;
    let estoqueAtual=0;

    while(estoqueAtual<limiteEstoque){
        estoqueAtual++;
        console.log("Peça adicionada ao estoque. Total atual: "+estoqueAtual);
    }
    console.log("Estoque cheio. Limite de peças atingido.");
}

// Questão 8
function calcularValorComDesconto(preco,desconto){
    return preco-(preco*desconto);
}

function excluirItemCarrinho(carrinho,posicao){
    return carrinho.splice(posicao,1);
}

// Questão 9
function questao9(){
    const produto={
        nome:"Notebook",
        preco:3500.00,
        estoque:5
    };

    const cliente={
        nome:"Lucas",
        email:"lucas@email.com",
        fidelidade:true
    };

    console.log("Produto:", produto);
    console.log("Cliente:", cliente);
}

// Questão 10
function pagamentoParcelado(valorTotal,parcelas){
    let valorParcela=valorTotal/parcelas;
    return `Pagamento em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`;
}

function pagamentoComDesconto(valorTotal,desconto){
    let valorFinal=valorTotal-(valorTotal*desconto);
    return `Pagamento com desconto: R$ ${valorFinal.toFixed(2)}`;
}

function questao10(){
    let valorCompra=500;
    let parcelas=5;
    let desconto=0.10;

    console.log(pagamentoParcelado(valorCompra,parcelas));
    console.log(pagamentoComDesconto(valorCompra,desconto));
}

questao1();
questao2();
questao3();
questao4();
questao5();
questao6();
questao7();
questao9();
questao10();
