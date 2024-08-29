// Digita quantas notas quiser
// para quando digita -1
// calcula media e a soma
// dizer se ficou de dp

import prompt from 'prompt-sync';
import * as funcoes from './funcoes.js';

const ler = prompt();
let notaAtual = 0;
let somaNotas = 0;
let mediaNotas = 0;
let arrayNotas = []

do {
    console.log("Digite uma nota: ");
    notaAtual = Number(ler());

    if(notaAtual >= 0 && notaAtual <= 10) {
        arrayNotas.push(notaAtual)
    }
} while(notaAtual != -1)

somaNotas = funcoes.somarArray(arrayNotas)

mediaNotas = somaNotas / arrayNotas.length

console.log(`\n\nSoma das Notas: ${somaNotas}`);
console.log(`\n\nMedia das Notas: ${mediaNotas.toFixed(2)}`);
console.log(`\n\nCondicao do Aluno: ${mediaNotas >= 6 ? "Aluno Aprovado!" : "Aluno de DP."}`);

