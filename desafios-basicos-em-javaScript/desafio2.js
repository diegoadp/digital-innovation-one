// Entrada
// A entrada contém 2 valores inteiros, separados por um espaço.

// Saída
// Imprimir a mensagem "X = " (sendo a letra X maiúscula) seguido pelo valor da variável X e pelo final de linha. Assegure que exista um espaço antes e depois do sinal de igualdade.


let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B;
console.log("X = " + total);