alert('Seja bem-vindo ao jogo da adivinhação!');
let numeroMaximo = prompt('Digite o número máximo do desafio da adivinhação');
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute nao for igual ao numero secreto
while (chute != numeroSecreto) {
    chute =  prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else if (chute > numeroSecreto) {
            alert(`Você errou! O número secreto é menor que ${chute} `);
        } else {
            alert(`Você errou! O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }



let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

/* if (tentativas > 1 ) {
    alert(`Você acertou! O número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Você acertou! O número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
}
*/ 


