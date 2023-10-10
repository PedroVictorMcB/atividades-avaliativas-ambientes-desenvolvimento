// faça uma sequência fibonacci com um número N

function calcularFibonacci() {
    const N = parseInt(document.getElementById("numero").value);
    const fibo = [0, 1];

    for (let i = 2; i <= N; i++) {
        const soma = fibo[i - 1] + fibo[i - 2];
        fibo.push(soma);
    }

    document.getElementById("resultado").textContent = "Série Fibonacci: " + fibo.join(", ");
}