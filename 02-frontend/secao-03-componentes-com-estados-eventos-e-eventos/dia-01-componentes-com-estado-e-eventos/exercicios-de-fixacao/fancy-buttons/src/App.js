// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {
      super()
      this.clickOne = this.clickOne.bind(this)
      this.clickTwo = this.clickTwo.bind(this)
      this.clickThree = this.clickThree.bind(this)
    }

    clickOne () {
      console.log(this);
      console.log('Click 1');
    }
    
    clickTwo () {
      console.log(this);
      console.log('Click 2');
    }
    
    clickThree () {
      console.log(this);
      console.log('Click 3');
    }

    render() {
    return (
      <div>
        <button onClick={ this.clickOne }>Botão 1</button>
        <button onClick={ this.clickTwo }>Botão 2</button>
        <button onClick={ this.clickThree }>Botão 3</button>
      </div>
    );
  }
}

export default App;
