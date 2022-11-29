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
      }));
    }
    
    clickTwo () {
      this.setState((prev) => ({
        two: prev.two + 1,
      }));
    }
    
    clickThree () {
      this.setState((prev) => ({
        three: prev.three + 1,
      }));
    }

    render() {
      const { one, two, three } = this.state;
    return (
      <div>
        <button onClick={ this.clickOne }>{`Cliques botão 1: ${one}`}</button>
        <button onClick={ this.clickTwo }>{`Cliques botão 2: ${two}`}</button>
        <button onClick={ this.clickThree }>{`Cliques botão 3: ${three}`}</button>
      </div>
    );
  }
}

export default App;
