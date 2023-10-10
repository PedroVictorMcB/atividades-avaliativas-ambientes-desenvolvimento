//identifique se o número é primo ou não

function verificarPrimo() {
    const num1 = parseInt(document.getElementById("numero").value);
    const primo = [];

    for (let i = num1; i > 0; i--) {
        if (num1 % i == 0) {
            primo.push(i);
        }
    }

    if (primo.length == 2) {
        document.getElementById("resultado").textContent = `O número ${num1} é primo, pois é dividido apenas por ${primo}.`;
    }
    else {
        document.getElementById("resultado").textContent = `O número ${num1} não é primo, pois é dividido por ${primo}.`;
    }
}