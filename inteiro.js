// verifique se o número é inteiro ou não
const N = parseInt(document.getElementById("quantity").value);
const array = [];
let cont = 0;

function makeArray(N) {
    for (let i = 0; i < N; i++) {
        let num = parseFloat(prompt(`Digite o ${i + 1}º número: `));
        array.push(num);
    }
    return array;
}

function getNumbers() {
    const N = parseInt(document.getElementById("quantity").value);
    desordedNums = makeArray(N);
    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i])) {
            cont = cont + 1;
        }
    }
    document.getElementById("lista-numeros").textContent = `Números Digitados: ${array} -------- Números Inteiros: ${cont}`;
}

// function pressOrded() {
//     document.getElementById("inteiros").textContent = `Números Ordenados: ${cont}`;
// }