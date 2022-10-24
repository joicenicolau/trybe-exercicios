// Exercícios - agora, a prática

//Ex1. Nova pesoa contratada
const fullName = (nomeCompleto) => {
   const email = nomeCompleto.toLowerCase().replace(' ', '_');
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
console.log(newEmployees(fullName));