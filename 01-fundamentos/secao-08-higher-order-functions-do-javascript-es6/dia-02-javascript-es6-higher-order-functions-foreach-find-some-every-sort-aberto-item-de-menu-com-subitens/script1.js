// Para fixar 

// Ex1 - Use o método forEach chamando a callback showEmailList para apresentar os emails
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
];
  
const showEmailList = (email) => {
 console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
};
  
emailListInData.forEach(showEmailList);
console.log(emailListInData);


// Ex2 - Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
  return numbers.find((number) => number % 3 === 0 && number % 5 === 0);
};

console.log(findDivisibleBy3And5(numbers));


// Ex3 - Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:
const names1 = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  return names1.find((name) => name.length === 5);
};

console.log(findNameWithFiveLetters(names1));


// Ex4 - Utilize o find para encontrar a música com id igual a 31031685, caso ela exista:
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];
  
function findMusic(id) {
    return musicas.find((music) => music.id === '31031685');
};
  
console.log(findMusic('31031685'));


// Ex5 - Escreva uma função que recebe dois parâmetros: o primeiro um array de nomes e o segundo, um nome qualquer. Essa função deve retornar true se o segundo parâmetro - um nome qualquer - estiver contido no primeiro parâmetro - array de nomes. Caso não esteja contido, deve retornar false.
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  return arr.some((verificaNome) => verificaNome === name);
};

console.log(hasName(names2, 'Ana'));


// Ex6- Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every;
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
  
const verifyAges = (arr, minimumAge) => {
    return arr.every((verificaIdade) => verificaIdade.age >= minimumAge);
};
  
console.log(verifyAges(people, 18));


// Ex7 - Utilize o sort para ordenar o array pela idade das pessoas em ordem crescente.
const people1 = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
  
people1.sort((a, b) => a.age - b.age); // ordem crescente;
people1.sort((a, b) => b.age - a.age); // ordem descrescente; 
  
console.log(people1);