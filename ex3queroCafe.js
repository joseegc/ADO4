
import prompt from 'prompt-sync';
const ler = prompt();

const entradas = ler().split(" ");

let numAlunos = Number(entradas[0]);

let minimoLitrosPorVez = Number(entradas[1]);

let mlPorAluno = Number(entradas[2]);

let totalMl = numAlunos * mlPorAluno;
let totalLitros = totalMl /1000;

let minimo = (Math.floor(totalLitros/minimoLitrosPorVez) * minimoLitrosPorVez);

if(totalLitros % minimo != 0) {
    minimo += minimoLitrosPorVez
}

console.log(`${minimo}`);
