import React from 'react';
import cat from './cat-2083492_1280.jpg'
import Image from './Image';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Image source={ cat } alternativeText="Cute cat staring"/>
      </div>
    );
  }
}

export default App;
