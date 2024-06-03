alert('Seja bem-vindo ao jogo da adivinhação!');
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 10');


// se chute for igual ao numero secreto
if (chute == numeroSecreto) {
    console.log('Você acertou! O número secreto era: ' + numeroSecreto);
} else {
    console.log('Você errou! O número secreto era: ' + numeroSecreto);
}