// faça uma função quicksort que ordene uma array

//adicionar ao botão de ordenar, na segunda etapa um evento onde coloque a página de fundo e toque a música "celebration time"

let desordedNums = [];
let ordedNums = [];

function makeArray(N) {
    for (let i = 0; i < N; i++) {
        let num = parseInt(prompt(`Digite o ${i + 1}º número: `));
        desordedNums.push(num);
    }
    return desordedNums;
}

function getNumbers() {
    const N = parseInt(document.getElementById("quantity").value);
    desordedNums = makeArray(N);
    document.getElementById("lista-desorded").textContent = `Números Desordenados: ${desordedNums}`;
}

function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quicksort(left), pivot, ...quicksort(right)];
}

function pressOrded() {
    ordedNums = quicksort(desordedNums);
    document.getElementById("lista-orded").textContent = `Números Ordenados: ${ordedNums}`;
}

// const desordedNums = [];
// const ordedNums = [];
// const N = 0;
// let num = 0;

// N = parseInt(prompt("Escolha uma quantidade de números a serem digitados: "));

// function makeArray(N) {

//     for (let i = 0; i < N; i++) {
//         num = parseInt(prompt(`Digite o ${i+1}o número: `));
//         desordedNums.push(num);
//     }
//     return desordedNums;
// }

// function pressDesorded(desordedNums) {
//     return document.getElementById("lista-desorded").innerHTML = `Números Desordenados: ${desordedNums}`;
// }

// function quicksort(arr) {
//     if (arr.length <= 1) {
//       return arr;
//     }
  
//     const pivot = arr[0];
//     const left = [];
//     const right = [];
  
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i]);
//       } else {
//         right.push(arr[i]);
//       }
//     }
  
//     return [...quicksort(left), pivot, ...quicksort(right)];
// }

// function pressOrded() {
//     ordedNums = quicksort(desordedNums);
    
//     return document.getElementById("lista-orded").innerHTML = `Números Ordenados: ${desordedNums}`;
// }