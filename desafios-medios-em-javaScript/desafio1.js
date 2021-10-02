// Entrada
// Você receverá 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.

// Saída
// Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. 
// No caso do salário, também deve haver um espaço em branco após o $.

let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let valor3 = parseFloat(gets());

let salario = valor2 * valor3;

console.log("NUMBER = " + valor1);

console.log("SALARY = U$ " + salario.toFixed(2));