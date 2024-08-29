import prompt from 'prompt-sync';
import somar from './funcoes.js'

const ler = prompt();

console.log('=== SOMA ===');

console.log('informe dois números');

process.stdout.write('>> ');
let num1 = Number(ler());

process.stdout.write('>> ');
let num2 = Number(ler());

let res = somar(num1, num2);

console.log(`O resultado da soma entre ${num1} e ${num2} é igual a ${res}`)