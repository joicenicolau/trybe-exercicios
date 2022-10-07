const getSubmitBtn = document.querySelector('#submit-btn');
const getClearBtn = document.querySelector('#clear-btn');
const getInput = document.querySelectorAll('input');
const getTextArea = document.querySelector('textarea');

function preventButtonSubmit(event) {
    event.preventDefault();
}

getSubmitBtn.addEventListener('click', preventButtonSubmit);

function buttonClear() {
    for (let index = 0; index < getInput.length; index += 1) {  // percorre todos os inputs
      const userInput = getInput[index];
      userInput.value = ''; // se meu input estiver retornando o valor de uma string vazia
      userInput.checked = false; // meu pre selecionado retorna false.
    }
    getTextArea.value = ''; // só tenho um textarea, sem necessidade de outro for
}

getClearBtn.addEventListener('click', buttonClear); // evento do botão limpar

