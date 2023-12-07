//faça a soma de um conjunto de números n

function calcularSoma() {
    const N = parseInt(document.getElementById("numero").value);
    let soma = 0;

    for (let i = 1; i <= N; i++) {
        soma = soma + i;
    }

    document.getElementById("resultado").textContent = `A soma de 1 a ${N} é igual a ${soma}`;
}