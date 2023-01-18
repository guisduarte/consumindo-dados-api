async function buscaEndereco(cep) {
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPCovertida = await consultaCEP.json();
        if(consultaCEPCovertida.erro) {
            throw Error('CEP não existente!');            
        }
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro');

        cidade.value = consultaCEPCovertida.localidade;
        logradouro.value = consultaCEPCovertida.logradouro;
        estado.value = consultaCEPCovertida.uf;
        bairro.value = consultaCEPCovertida.bairro;

        console.log(consultaCEPCovertida);
        return consultaCEPCovertida;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente! </p>`
        console.log(erro)
    }
}

let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));