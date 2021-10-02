// Entrada
// Você receberá 1 valor inteiro N, onde N > 0.

// Saída
// Exiba todos os números pares até o valor de entrada, sendo um em cada linha. 

// Valor informado pelo usuário "N"
let n = parseInt(gets());

for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
};