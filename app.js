alert('Seja bem-vindo ao jogo da adivinhação!');

let numeroSecreto = 5;

let chute = prompt('Escolha um número entre 1 e 30');

if (chute == numeroSecreto) {
    console.log('Você acertou! O número secreto era: ' + numeroSecreto);
} else {
    console.log('Você errou! O número secreto era: ' + numeroSecreto);
}