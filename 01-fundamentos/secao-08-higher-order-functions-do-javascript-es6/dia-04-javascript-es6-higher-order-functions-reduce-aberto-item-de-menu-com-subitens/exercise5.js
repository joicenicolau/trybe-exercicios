// Exercicíos - agora, a prática:
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
// const expectedResult = 20;
const regexA = /a/i;
const contandoA = names.reduce((acc, palavra) => {
    let palavraA = palavra.split('').filter((letra) => letra.match(regexA)).length;

    return acc + palavraA;
}, 0);

console.log(containsA());

// pesquisa: https://bobbyhadz.com/blog/javascript-count-regex-matches