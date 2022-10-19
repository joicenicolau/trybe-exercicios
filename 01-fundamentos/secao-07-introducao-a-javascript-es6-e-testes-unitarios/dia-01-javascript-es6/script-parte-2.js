// Exercício 1

// Crie uma função que receba um número e retorne seu fatorial.

const factorial = (num) => {
  let result = 1;
      
   for (let index = num; index > 0; index -= 1) {
    result *= index;
   }
   return result;
}

const result = factorial(4); // Ex. 4 = num.
console.log(`Esse é o fatorial ${result}`);

// Exercício 2

// Crie uma função que receba uma frase como parâmetro e retorne a maior palavra contida nesta frase.

const sizeWord = (text) => {
  const wordText = text.split(' ');
  let wordLength = 0;
  let result = '';

  for (const word of wordText) {
      if (word.length > wordLength) {
          wordLength = word.length;
          result = word;
      }
  }

  return result;
}

console.log(sizeWord('Ela escondia com palavras o que eu publicava com silêncio'));

// Exercício 3
// No HTML

// Exercício 4


