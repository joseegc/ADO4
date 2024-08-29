import prompt from 'prompt-sync';
const ler = prompt();

console.log("Quantidade de numeros inteiros: ");

const numerosInteiros = Number(ler())

let arrayNumeros = []
let somaNumeros = 0
let numeroAtual = 0

for (var i = 0; i < numerosInteiros; i++) {
    console.log("Numero: ");
    numeroAtual = Number(ler());

    if (numeroAtual == 0 && i != 0){
        arrayNumeros.pop()
        console.log(`\nCancela: [${arrayNumeros}]\n`);

    } else {
        arrayNumeros.push(numeroAtual)
        console.log(`\nRegistra: [${arrayNumeros}]\n`);
    }
}

for (var i = 0; i < arrayNumeros.length; i++) {
    somaNumeros += arrayNumeros[i]
}

console.log(`\n\nSoma dos Numeros Registrados: ${somaNumeros}`);
