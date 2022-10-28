// Para fixar - Spread Operator
// Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens; faça a função retornar uma lista única, contendo todos os itens da nossa salada de frutas, usando o spread.

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'morango', 'kiwi'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['mel', 'granola', 'creme de leite'];

const fruitSalad = (fruit, additional) => {
  const addItens = [ ...fruit, ...additional];
  return addItens;
};

// console.log(fruitSalad(specialFruit, additionalItens));


//----------------------------- ** ------------------------------------
// Para fixar - Object Destructuring
// Crie um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos.
// Existem dois objetos referentes a uma pessoa usuária, um com informações pessoais e outro com informações referentes ao seu cargo na empresa trappistEnterprise. Você precisa criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator.

const user = {
    name: 'Maria',
    age: 21,
    nationality: 'Brazilian',
};
  
const jobInfos = {
    profession: 'Software engineer',
    squad: 'Rocket Landing Logic',
    squadInitials: 'RLL',
};

// spread
const userJoab = {
    ...user,
    ...jobInfos,
}; 

// dest
const {name, age, nationality, profession, squad, squadInitials} = userJoab;

// console.log(`Hi, my name is ${name}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials} - ${squad}`);


//----------------------------- ** ------------------------------------
// Para Fixar - Array Destructurng
// Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
// ------ Ex1
const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];
// saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [saudacao, realizaSaudacao] = saudacoes;
console.log(realizaSaudacao(saudacao)); 

// ------ Ex2
// A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// console.log(comida, animal, bebida); // arroz gato água
// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal]; // Criando o array e o desestruturando
// console.log(comida, animal, bebida); 

// ------ Ex3
// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];
// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[,,, ...numerosPares] = numerosPares;

// console.log(numerosPares);

//----------------------------- ** ------------------------------------
// Para fixar - Default Destructuring
// Do jeito que está, quando person é passado para a função getNationality o retorno é João is undefined. Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

// console.log(getNationality(otherPerson)); // Ivan is Russian
// console.log(getNationality(person));


//----------------------------- ** ------------------------------------
// Para Fixar - Object Property Shorthand
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
const getPosition = (latitude, longitude) => ({
    latitude,
    longitude,
});
  
// console.log(getPosition(-19.8157, -43.9542));


//----------------------------- ** ------------------------------------
// Para Fixar - Default Parameters
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => number * value;
// console.log(multiply(8));