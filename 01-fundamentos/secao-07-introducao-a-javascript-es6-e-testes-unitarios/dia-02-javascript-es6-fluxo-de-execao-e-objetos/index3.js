// Exercícos - organizando lições
// Parte III

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  // Req 1 
  const addTurnoNoite = (object, key, value) => {
    object[key] = value;
    // através do "object[key]" acessamos a chave do objecteto cujo valor queremos modificar. A partir daí basta atribuir o valor desejado, que em nossa função é o terceiro parâmetro (value).
  };
  
  addTurnoNoite(lesson2, 'turno', 'noite');
  console.log(lesson2);

  //Req 2
  const listKeys = (obj) =>  Object.keys(obj);
  // O metodo "Object.keys()" faz essa listagem, basta passarmos o objeto que queremos referenciar como parâmetro.

  console.log(listKeys(lesson1));

  //Req 3
  const sizeObj = (obj) =>  Object.keys(obj).length;
  // Como o "Object.keys()" devolve um array, podemos utilizar o método ".length" para obter seu tamanho
  console.log(sizeObj(lesson1));

  //Req 4
  const listValues = (obj) =>  Object.values(obj);
  // Quando queremos recuperar as chaves usamos o "Object.keys()", de forma similar, para recuperar os valores em um array usamos o método "Object.values()"

  console.log(listValues(lesson1));

  //Req 5
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  // O método "Object.assing()" recebe dois parametros, um objeto, e o que queremos atribuir à ele. Se no primeiro parametro passarmos um objeto vazio ele criará um objeto novo com as carateristicas do segundo parâmetro.

  console.log(allLessons);

  //Req 6
  
