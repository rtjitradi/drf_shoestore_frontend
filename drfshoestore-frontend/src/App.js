import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoe: [{manufacturer: "Air Jordan"}, {manufacturer: "Under Armour"}, {manufacturer: "Nike"}, {manufacturer: "Adidas"}, {manufacturer: "Converse"}],
    };
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.shoe.map(shoe => (
          <li>{shoe.manufacturer}</li>
        ))}
        </ul>
      </div>
    );

  }
}

export default App;
