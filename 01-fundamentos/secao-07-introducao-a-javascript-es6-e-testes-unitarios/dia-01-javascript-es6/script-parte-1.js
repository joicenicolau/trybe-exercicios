// Parte I
// Exercício 1:
//Copie e cole a função abaixo:

function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    ifScope = ifScope + " ótimo, fui utilizada no escopo !";
    console.log(ifScope);
  } else {
    var elseScope = "Não devo ser utilizada fora do meu escopo (else)";
    console.log(elseScope);
  }
  console.log(ifScope + " o que estou fazendo aqui ? :O"); // Se necessário esta linha pode ser removida.
}

testingScope(true);

//Problema:

// Modifique a estrutura da função para que ela seja uma arrow function:

// Altere as concatenações para template literals

// Altere a variável do tipo var, ifScope para let e elseScope, para const.

// Resolvendo:

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}
testingScope(true);


// Exercício 2
// Copie e cole a função abaixo:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 

// Problema:

// Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase “Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!”.

// Resolvendo:
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (oddsAndEvens) => {
 const sortOdds = oddsAndEvens.sort((a, b) => a - b);
  return sortOdds;
};

const sortOdds = sortOddsAndEvens(oddsAndEvens);

console.log(`Os números ${sortOdds} se encontram ordenados de forma crescente!`);
