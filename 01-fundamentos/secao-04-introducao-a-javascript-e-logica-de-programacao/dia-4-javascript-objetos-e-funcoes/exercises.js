/* Exercícios - objetos e for/in */
/* Exercício 1 */

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

  console.log('Bem-vinda, ' + info.personagem);


  /* Exercício 2 */

  let info2 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }

  console.log(info2['recorrente']);


  /* Exercício 3 */

  let info3 = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }

    for (let key in info3) {
        console.log(key);
    }
 

    /* Exercício 4 */

    let info4 = {
        personagem: 'Margarida',
        origem: 'Pato Donald',
        nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
        recorrente: 'Sim'
    }

    for (let key in info4) {
        console.log(info4[key]);
    }


    /* Exercício 5 */

    let info5 = {
        personagem: 'Tio Patinhas',
        origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178', 
        nota: 'O último MacPatinhas',
        recorrente: 'Sim'
    }

    console.log(info.personagem + ' e ' + info5.personagem);
    console.log(info.origem + ' e ' + info5.origem);
    console.log(info.nota + ' e ' + info5.nota);

    for (let key in info2) {
        if (key === 'recorrente' && info2[key] == 'Sim' && info5[key] == 'Sim') {
            console.log('Ambos recorrentes');
            }
    } 
      

/* Exercícios - Leitura de objetos */
/* Exercício 1 */

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo);

/* Exercício 2 */

let leitor2 = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      },
    ],
  };

/* Exercício 3 */

let livrosFavoritos = ['O Pior Dia de Todos', 'Harry Potter e o Prisioneiro de Azkaban'];

let quantidade = 0;

for (let index = 0; index < livrosFavoritos.length; index++) {
    if (livrosFavoritos[index] === 'O Pior Dia de Todos') quantidade++;
    
}

console.log(leitor2.nome + ' '+ 'tem' + ' ' + livrosFavoritos.length + ' ' + 'livros favoritos');

