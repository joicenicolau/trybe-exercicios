// import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
    constructor() {
      super()
      this.clickOne = this.clickOne.bind(this)
      this.clickTwo = this.clickTwo.bind(this)
      this.clickThree = this.clickThree.bind(this)

      this.state = {
        one: 0,
        two: 0,
        three: 0,
      };
    }

    clickOne () {
      this.setState((prev) => ({
        one: prev.one + 1,
      }), () => {
        console.log(`Botão 1 ${this.getButtonColor(this.state.one)}`);
      });
    }
    
    clickTwo () {
      this.setState((prev) => ({
        two: prev.two + 1,
      }), () => {
        console.log(`Botão 2 ${this.getButtonColor(this.state.two)}`);
      });
    }
    
    clickThree () {
      this.setState((prev) => ({
        three: prev.three + 1,
      }));
    }

    getButtonColor(num) {
      return num % 2 === 0 ? 'green' : 'white';
    }

    render() {
      const { one, two, three } = this.state;
    return (
      <div>
        <button 
          onClick={ this.clickOne }
          style={ { backgroundColor: this.getButtonColor(one) } }
        > 
          {`Cliques botão 1: ${one}`}
        </button>
        <button 
          onClick={ this.clickTwo }
          style={ { backgroundColor: this.getButtonColor(two) } }
        >
          {`Cliques botão 2: ${two}`}
        </button>
        <button 
          onClick={ this.clickThree }
          style={ { backgroundColor: this.getButtonColor(three) } }
        >
          {`Cliques botão 3: ${three}`}
          </button>
      </div>
    );
  }
}

export default App;
