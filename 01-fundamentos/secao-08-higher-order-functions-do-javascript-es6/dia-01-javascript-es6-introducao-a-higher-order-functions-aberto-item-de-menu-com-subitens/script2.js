// Exercícios - agora, a prática

//Ex1. Nova pesoa contratada
const fullName = (nomeCompleto) => {
   const email = nomeCompleto.toLowerCase().replaceAll(' ', '_');
   return { nomeCompleto, email: `${email}@trybe.com` };
};
 
const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luisa Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};
// console.log(newEmployees(fullName));


// Ex2. Sorteador de loteria
const resultadoLoteria = (meuNumero, numSorteado) => {
    const geraResultado = Math.floor((Math.random() * 5) + 1);
    return numSorteado(meuNumero, geraResultado);
};

const checkNumeros = (meuNumero, numSorteado) => (meuNumero === numSorteado) ? 'Parabéns você ganhou' : 'Tente novamente';

// console.log(resultadoLoteria(2, checkNumeros)); // resultadoLoteria = 1 a 6, numbers. 


// Ex3. Corretor automático de exame
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// const comparaAnswers = (RIGHT_ANSWERS, STUDENT_ANSWERS) => {
//     if(RIGHT_ANSWERS === STUDENT_ANSWERS) {
//      return 1;
//     } if (STUDENT_ANSWERS === 'N.A') {
//      return 0;    
//     } 
//     return -0.5;    
// };

// const contaPontos = (RIGHT_ANSWERS, STUDENT_ANSWERS, finalPoints) => {
//     let points = 0; 

//     for (let index = 0; index < RIGHT_ANSWERS.length; index += 1) {
//         const element = finalPoints(RIGHT_ANSWERS[index], STUDENT_ANSWERS[index]);
//         points += element;
//     }
//     return `Resultado final: ${points} pontos`;
// };

// console.log(contaPontos(RIGHT_ANSWERS, STUDENT_ANSWERS, comparaAnswers));

const compara = (corretas, respostas) => {
    let pontos = 0;
    for (let index = 0; index < corretas.length; index += 1) {
        if(corretas[index] === respostas[index]) pontos += 1;
        if (corretas[index] !== respostas[index] && respostas[index] !== 'N.A') pontos -= 0.5;
        }
        return `Resultado final: ${pontos} pontos`;
    };

const escola = (corretas, respostas, funçãoCompara) => funçãoCompara(corretas, respostas);
    
console.log(escola(RIGHT_ANSWERS, STUDENT_ANSWERS, compara));