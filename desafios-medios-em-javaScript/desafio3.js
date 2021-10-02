// Entrada
// Você receberá seis valores, negativos e/ou positivos.

// Saída
// Exiba uma mensagem dizendo quantos valores positivos foram lidos. assim como é exibido abaixo no exemplo de saída. 
// Não se esqueça de incluir na mensagem de saída o sufixo " valores positivos".

let quantidadePositivos = 0;

for (let i = 0; i < 6; i++) {

    const valorInformadoPeloUsuario = gets();
    if (valorInformadoPeloUsuario > 0) {
        quantidadePositivos += 1;
    }

}

console.log(`${quantidadePositivos} valores positivos`);