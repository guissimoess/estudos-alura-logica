console.log('Seja bem vindo');

let nome = 'Guilherme';
console.log(`Olá, ${nome}`);
alert(`Olá, ${nome}`);

let linguagemPreferida = prompt ('Qual a linguagem de programação que você mais gosta?');
console.log(linguagemPreferida);

let valor1 = 5;
let valor2 = 9;
let resultado = valor1 + valor2;
let resultado2 = valor1 - valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado2}.`);

let idade = prompt('Digite sua idade');
if (idade >= 18) {
    console.log('Você é maior de idade.');
} else {
    console.log('Você é menor de idade.');
}

let numero = prompt('Digite um número');
if (numero > 0) {
    console.log('O número é positivo.');
} else if (numero < 0) {
    console.log('O número é menor negativo');
} else {
    console.log('O número é zero.');
}

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}


let nota = 8;
console.log(nota >= 7 ? 'Aprovado' : 'Reprovado');

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroAleatorio1a10 = parseInt(Math.random() * 10) + 1;
console.log(numeroAleatorio1a10);

let numeroAleatorio1a1000 = parseInt(Math.random() * 1000) + 1;
console.log(numeroAleatorio1a1000);