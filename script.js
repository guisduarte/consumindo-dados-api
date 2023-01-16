//Sincrono = uma linha por vez na ordem que for escrita.

console.log("Mandando oi pro amigo!");

function mandaMensagem() {
    console.log("Tudo bem?");
    console.log("Vou te mandar uma solicitação!");
    console.log("Solicitação recebida!");
}

mandaMensagem();

console.log("Tchau tchau!"); 

// Assincrono = setTimeOut => faz esperar um tempo determinado para a função ser chamada, nesse caso 5 segundos (5 mil milesegundos). Lê a próxima escrita, e depois do 5 segundos, executa a função que ficou aguardando.

console.log("Mandando oi pro amigo!");

function mandaMensagem() {
    console.log("Tudo bem?");
    console.log("Vou te mandar uma solicitação!");
    console.log("Solicitação recebida!");
}

setTimeout(mandaMensagem, 5000);

console.log("Tchau tchau!");