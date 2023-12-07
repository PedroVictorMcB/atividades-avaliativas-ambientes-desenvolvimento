// faça uma sequência fibonacci com um número N

function calcularFibonacci() {
    const N = parseInt(document.getElementById("numero").value);
    const sequenciaFibonacci = [0, 1];

    for (let i = 2; i <= N; i++) {
        const soma = sequenciaFibonacci[i - 1] + sequenciaFibonacci[i - 2];
        sequenciaFibonacci.push(soma);
    }

    document.getElementById("resultado").textContent = "Série Fibonacci: " + sequenciaFibonacci.join(", ");
}