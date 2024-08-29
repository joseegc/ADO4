export function somar(n1, n2) {
    let s = n1 + n2;
    return s;
}

export function somarArray(array) {
    let soma = 0;

    for (var i = 0; i < array.length; i++) {
        soma += array[i]
    }

    return soma;
}