const getSubmitBtn = document.querySelector('#submit-btn');
const getClearBtn = document.querySelector('#clear-btn');

function preventButtonSubmitClear(event) {
    event.preventDefault();
}

getSubmitBtn.addEventListener('click', preventButtonSubmitClear);
getClearBtn.addEventListener('click', preventButtonSubmitClear);
console.log();
