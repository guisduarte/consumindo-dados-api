async function buscaEndereco(cep) {
    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPCovertida = await consultaCEP.json();
        if(consultaCEPCovertida.erro) {
            throw Error ('CEP não existente!')
        }
        console.log(consultaCEPCovertida);
        return consultaCEPCovertida;
    } catch (erro) {
        console.log(erro)
    }
}

