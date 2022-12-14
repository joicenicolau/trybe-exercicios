// Exercícios - Para Fixar
// Vamos praticar com os seguintes exercícios:

// Crie uma função que retorne a string 'Acordando!!';
const acorda = () => 'Acordando!!';

// Crie outra função que retorne a string 'Bora tomar café!!';
const cafe = () => 'Bora tomar café!!';

// Crie mais uma função que retorne a string 'Partiu dormir!!';
const dormir = () => 'Partiu dormir!!';

// Agora desenvolva uma HOF chamada doingThings e configure esta função para que imprima no console o resultado da execução das funções que você criou nos exemplos anteriores. Exemplo:
// Ao chamar a função doingThings:
// doingThings(wakeUp);
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!

const doingThings = (string) => console.log(string()); // callback-função passada para parâmetro. 

doingThings(acorda);
doingThings(cafe);
doingThings(dormir);
