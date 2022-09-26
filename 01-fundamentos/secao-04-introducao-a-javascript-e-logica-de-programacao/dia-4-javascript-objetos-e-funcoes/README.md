## Exercícios - Objetos e for/in

Usando o objeto abaixo, faça os exercícios a seguir:

´´´
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
´´´

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe ´´´meuObjeto.chave´´´. Valor esperado no console:

2. Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe ´´´meuObjeto['chave'] = valor´´´. Valor esperado no console:

´´´
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
´´´

3. Faça um ´´´for/in´´´ que mostre todas as chaves do objeto. Valor esperado no console:

´´´
personagem
origem
nota
recorrente
´´´
