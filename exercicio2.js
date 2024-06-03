let diaSemana = prompt('Qual o dia da semana?')

if (diaSemana == 'Sábado' || diaSemana == 'Domingo') {
    alert('Bom fim de semana');
} else {
    alert('Boa semana');
}


let numero = prompt('Digite um número');
if (numero > 0 ) {
    alert('Número positivo!')
} else {
    alert('Número negativo!');
}

let pontuacao = 100;
if (pontuacao >= 100) {
    console.log('Parabéns, você venceu!');
} else {
    console.log('Tente novamente para ganhar!');
}


let saldoConta = 5000;
alert(`Seu saldo é de R$${saldoConta}.`);

let nome = prompt('Digite seu nome: ');
alert(`Seja bem vindo ${nome} `);