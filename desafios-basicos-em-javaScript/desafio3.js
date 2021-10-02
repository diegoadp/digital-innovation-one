// Entrada
// Você receberá um valor inteiro N (0 < N < 1000000).

// Saída
// Exiba o valor lido e a quantidade mínima de notas de cada tipo necessárias, seguindo o exemplo de saída abaixo. Após cada linha deve ser imprimido o fim de linha.

let n = parseInt(gets());
let quantidadeNotas = 0;
let cedulas = [100, 50, 20, 10, 5, 2, 1];

// Função responsável por contar as notas a partir de um valor.
function contaNotas(valor) {
    quantidadeNotas = parseInt(n / valor);

    n -= quantidadeNotas * valor;

    console.log(`${quantidadeNotas} nota(s) de R$ ${valor},00`);
}

console.log(n);

for (let cedula in cedulas) {
    contaNotas(cedulas[cedula]);
}