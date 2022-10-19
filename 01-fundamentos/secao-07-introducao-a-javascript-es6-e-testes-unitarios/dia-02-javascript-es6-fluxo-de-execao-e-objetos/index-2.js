// <!-- Exercícios - pedido de clientes -->
// <!-- Parte II -->

const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const address = 'address'; // Armazena a palavra 'address' em uma variável
    const deliveryPerson = order.order.delivery.deliveryPerson; // Acesse e armazene a chave `deliveryPerson` em uma variável através de 'notação de ponto'.
    const customerName = order['name']; // Acesse e armazene a chave `name` em uma variável através de 'notação de chaves'.
    const customerPhone = order['phoneNumber']; // Acesse e armazene a chave `phoneNumber` em uma variável através de 'notação de chaves'.
    const street = order[address].street; // Acesse e armazene a chave `street` em uma variável, através de 'notação de chaves' e 'notação de ponto'.
    const number = order[address].number; // Acesse e armazene a chave `number` em uma variável, através de 'notação de chaves' e 'notação de ponto'.
    const apartment = order[address].apartment; // Acesse e armazene a chave `apartment` em uma variável, através de 'notação de chaves' e 'notação de ponto'.

    console.log(`Olá ${deliveryPerson}, entrega para: ${customerName}, Telefone: ${customerPhone}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
  
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const newBuyer = order.name = 'Luiz Silva'; // Altere o nome da pessoa compradora
    const newTotal = order.payment.total = '50'; // Altere o valor total da compra
    const pizzas = Object.keys(order.order.pizza); // Recupere as chaves que estão em `order.order.pizza`
    const drinks = order.order.drinks.coke.type; // Recupere o `type` da chave `coke`.

    console.log(`Olá ${newBuyer}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${drinks} é R$ ${newTotal},00.`); // Exiba a mensagem desejada utilizando `template literals`
  };
  
  orderModifier(order);
  