// Exercício 1

// Crie uma função que receba um número e retorne seu fatorial.

// const factorial = (num) => {
//   let result = 1;
//    result ? num === 1 : num !== 1;
   
//    for (let index = num -1; index >= 1; index += 1) {
//     num = num * index;
//    }
//    return num;
// }

// console.log(factorial(5));

function factorial(num) {
    if (num === 0 || num === 1)
      return 1;
    for (let i = num - 1; i >= 1; i -= 1) {
      num *= i;
    }
    return num;
  }
  console.log(factorial(5));