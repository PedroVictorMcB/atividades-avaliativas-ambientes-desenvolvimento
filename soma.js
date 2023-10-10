//faça a soma de um conjunto de números n

function calcularSoma() {
    const n = parseInt(document.getElementById("numero").value);
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma = soma + i;
    }

    document.getElementById("resultado").textContent = `A soma de 1 a ${n} é igual a ${soma}`;
}

//MINHA SOLUÇÃO
// const n = process.argv[2];
// let soma = 0;
// let i = 1;

// for (i; i <= n; i++) {
//     soma = soma + i;
// }

// console.log(`A soma de 1 a ${i-1} eh igual a ${soma}`);