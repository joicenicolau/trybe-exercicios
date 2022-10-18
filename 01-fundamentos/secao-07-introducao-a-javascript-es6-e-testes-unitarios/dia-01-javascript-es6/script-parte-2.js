// Exercício 1

// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (num) => {
  let result = 1;
      
   for (let index = num; index > 1; index -= 1) {
    result *= index;
   }
   return result;
}

const result = factorial(4); // Ex. 4 = num.
console.log(`Esse é o fatorial ${result}`);
