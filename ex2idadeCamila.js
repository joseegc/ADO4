import prompt from 'prompt-sync';
const ler = prompt();

console.log('=== Idade de Camila ===');

console.log('informe 3 idades:');

process.stdout.write('>> ');
let idade1 = Number(ler());

process.stdout.write('>> ');
let idade2 = Number(ler());

process.stdout.write('>> ');
let idade3 = Number(ler());

let idadeCamila;
let menorIdade = idade1;
let maiorIdade = idade1;

if (idade2 < menorIdade) {
    menorIdade = idade2;
}

if (idade3 < menorIdade) {
    menorIdade = idade3;
}


if (idade2 > maiorIdade) {
    maiorIdade = idade2;
}

if (idade3 > maiorIdade) {
    maiorIdade = idade3;
}

if (idade1 > menorIdade && idade1 < maiorIdade) {
    idadeCamila = idade1;
} else if (idade2 > menorIdade && idade2 < maiorIdade) {
    idadeCamila = idade2;
} else {
    idadeCamila = idade3;
}

console.log(`Camila tem ${idadeCamila} anos`)