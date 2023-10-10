function calcularMDC() {
    // Obtenha os valores inseridos pelo usuário
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    // Verifique se os valores são números válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Calcula o MDC dos números inseridos
    let mdc = calcular(num1, num2);

    // Exibe o resultado na página
    document.getElementById("resultado").textContent = `O MDC dos números escolhidos é ${mdc}.`;
}

// Função para calcular o MDC
function calcular(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}