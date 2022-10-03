function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const sextas = [4, 11, 18, 25];
const feriados = [24, 25, 31];

//Parte 1

function criaDias() {
// seleciona elemento pai
const elementoPai = document.getElementById('days');

for (let id = 0; id < decemberDaysList.length; id += 1) {
// cria o elemento
const minhaLi = document.createElement('li');
// atribuir as propriedades
minhaLi.classList = 'day';
minhaLi.innerText = decemberDaysList[id];

if (sextas.includes(decemberDaysList[id])) {
minhaLi.classList.add('friday');
};

if (feriados.includes(decemberDaysList[id])) {
minhaLi.classList.add('holiday');
}

// appendChild
elementoPai.appendChild(minhaLi);
}
} 

criaDias();

//Parte 2

function criaBotaoFeriados(feriados) {
 //seleciona o elemento pai
 let button = document.querySelector('.buttons-container');

 //cria o elemento
 let meuBotao = document.createElement('button');


}