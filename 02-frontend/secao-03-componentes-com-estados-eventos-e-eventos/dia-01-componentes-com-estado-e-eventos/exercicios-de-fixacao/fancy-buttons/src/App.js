// import logo from './logo.svg';
import './App.css';
import React from 'react';

function clickOne () {
  console.log('Click 1');
}

function clickTwo () {
  console.log('Click 2');
}

function clickThree () {
  console.log('Click 3');
}

class App extends React.Component {
    render() {
    return (
      <div>
        <button onClick={ clickOne }>Botão 1</button>
        <button onClick={ clickTwo }>Botão 2</button>
        <button onClick={ clickThree }>Botão 3</button>
      </div>
    );
  }
}

export default App;
