// Exercicíos - agora, a prática:
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];
  
// const expectedResult = 20;
const regexA = /a/i;  
function containsA() {
    return names.reduce((acc, curr) => {
    const lowerCase = (curr.match(regexA)).length 
    // const upperCase = (curr.match(/A/g) || []).length
        return acc + lowerCase; 
    }, 0)
}

console.log(containsA());

// pesquisa: https://bobbyhadz.com/blog/javascript-count-regex-matches