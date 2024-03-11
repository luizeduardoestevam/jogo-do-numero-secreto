let listaDeNumeroSorteadoos = [];
let numeroLimete = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Famele', {rate: 1.2});
}

function exibirmensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto' );
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirmensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou! Beijos do dudu');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você é bacana e acertou o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Quase lá, o número é menor');
        } else {
            exibirTextoNaTela('p', 'Quase lá, o número é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random () * numeroLimete + 1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteadoos.length;

    if(quantidadeDeElementosNaLista == numeroLimete ) {
        listaDeNumeroSorteadoos = [];
    }
    if (listaDeNumeroSorteadoos.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumeroSorteadoos.push(numeroEscolhido);
        console.log(listaDeNumeroSorteadoos)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirmensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}