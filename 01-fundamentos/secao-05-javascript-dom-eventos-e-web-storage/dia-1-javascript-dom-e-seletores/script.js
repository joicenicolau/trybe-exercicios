 /*
      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
      - document.getElementById()
      - document.getElementsByClassName()
      - document.getElementsByTagName()
      
      1. Crie e execute uma função que mude o texto na tag `<p>-----</p>`, para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício).
      2. Crie e execute uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
      3. Crie e execute uma função que mude a cor do quadrado vermelho para branco.
      4. Crie e execute uma função que corrija o texto da tag <h1>.
      5. Crie e execute uma função que modifique o texto da primeira tag <p> para maiúsculo.
      6. Crie e execute uma função que exiba o conteúdo de todas as tags <p> no console.
      */

    // Exercicio 1
    function changeText() {
        let p =  document.getElementsByTagName('p')[1].innerText = 'Inserida no mercado de trabalho no ramo de tecnologia!';
    }
      
    changeText();

    // Exercício 2
    function changeColorYellowToGreen() {
        let color = document.getElementsByClassName('main-content')[0];
        color.style.background = 'rgb(76,164,109)';
    }

    changeColorYellowToGreen();

    //Exercícios 3
    function changeColorRedToWhite() {
        let color = document.getElementsByClassName('center-content')[0];
        color.style.background = 'white';
    }

    changeColorRedToWhite();

    //Exercício 4
    function changeTitle() {
        let title = document.getElementsByTagName('h1')[0];
        title.innerHTML = 'Exercícios - JavaScript: D.O.M e Seletores';        
    }

    changeTitle();

    //Exercício 5
    function biggerCase() {
        let letters =  document.getElementsByTagName('p')[0];
        letters.innerHTML = letters.innerHTML.toUpperCase();
        
    }

    biggerCase();
    
    //Exercício 6
    function showParagraphs() {
        let paragraphs = document.getElementsByTagName('p');
        for (let index = 0; index < paragraphs.length; index += 1) {
            console.log(paragraphs[index].innerText);
        
        }
        
    }

    showParagraphs();
