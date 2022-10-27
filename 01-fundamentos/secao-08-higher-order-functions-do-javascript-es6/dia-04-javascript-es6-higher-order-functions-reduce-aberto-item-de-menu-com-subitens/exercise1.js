// Exercícios - agora, a prática:
// Organizando biblioteca

// Utilize o reduce para transformar uma matriz em um array.
const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];
  
function flatten() {
    return arrays.reduce((acc, crr) => {
     return [acc + ' ' + crr];
    });
}

// console.log(flatten());