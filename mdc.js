function calcularMDC() {

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    let mdc = calcular(num1, num2);

    document.getElementById("resultado").textContent = `O MDC dos números escolhidos é ${mdc}.`;
}

function calcular(num1, num2) {
    while (num2 !== 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return num1;
}