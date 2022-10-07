function handleSubmit(event) {
    const getSubmitBtn = document.querySelector('#submit-btn');
    event.preventDefault();
    getSubmitBtn.addEventListener('click', handleSubmit);

    const getClearBtn = document.querySelector('#clear-btn');
    getClearBtn.addEventListener('click', clearFields);
};

