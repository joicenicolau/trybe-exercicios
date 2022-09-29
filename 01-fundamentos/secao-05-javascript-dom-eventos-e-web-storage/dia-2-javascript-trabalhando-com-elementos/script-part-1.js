const elementH1 = document.createElement('h1'); //criando uma váriavel para armazenar minha criação do elemento h1.
elementH1.innerText = "Exercício - JavaScript DOM"; //criando o texto do meu elemento h1
document.body.appendChild(elementH1) //posicionando e adicionando meu elemento h1 e meu texto. OBS: aqui sem aspas dentro dos parenteses. 

const elementMain = document.createElement('main');
elementMain.className = "main-content";
document.body.appendChild(elementMain);

const elementSectionCenter = document.createElement('section');
elementSectionCenter.className = "center-content";
elementMain.appendChild(elementSectionCenter); //local de posicionamento é na main acima. 

const paragraph = document.createElement('p');
paragraph.innerHTML = "Resolvendo exercícios";
elementSectionCenter.appendChild(paragraph); //filho da acima.

const elementSectionLeft = document.createElement("section");
elementSectionLeft.className = "left-content";
elementMain.appendChild(elementSectionLeft); //local de posição - main do passo 2.

const elementSectionRight = document.createElement("section");
elementSectionRight.className = "left-content";
elementMain.appendChild(elementSectionRight); //local de posição - main do passo 2.

const elementImage = document.createElement("img");
elementImage.className = "small-image";
elementImage.src = "https://picsum.photos/200"; //pediu um src e fornceu o link. 
elementSectionLeft.appendChild(elementImage); //local de posição - main do passo 5.


const elementListUl = document.createElement("ul"); //Criação da Ul;
elementSectionRight.appendChild(elementListUl); //Adicionei a posição;
const textNumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 
        'Sete', 'Oito', 'Nove', 'Dez'] //criação do meu objeto;
      for (let num in textNumbers) { //percorre o objeto;
        const elementLi = document.createElement('li'); //cria uma lista dentro do laço for;
        elementLi.innerHTML = textNumbers[num]; //adiciona cada objeto do array a lista;
        elementListUl.appendChild(elementLi); //adiciona a li na posição da ul. 
      }

for (let index = 1; index <= 3; index += 1) { //laço for para percorrer 3 tags h3;
 const elementH3 = document.createElement('h3'); //variável armazenando criação do conteúdo de h3;
 elementH3.innerHTML = 'Show ' + index; //adicionabo texto + index do for, pois quero o texto para as três h3 que meu laço for vai percorrer;
 elementMain.appendChild(elementH3); //adiciona o elemento criado na variável a posicão do passo 2.
}




