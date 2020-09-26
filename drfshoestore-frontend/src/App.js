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

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoe/")
    .then(response => response.json())
    .then(data => this.setState({shoe: data.results}));
  }

  render() {
    return (
      <div>
        <ul>
        {this.state.shoe.map(shoe => (
          <div>
          <li>Brand Name: {shoe.brand_name}</li>
          <li>Size: {shoe.size}</li>
          <li>Manufacturer: {shoe.manufacturer}</li>
          <li>Color: {shoe.color}</li>
          <li>Material: {shoe.material}</li>
          <li>Shoe Type: {shoe.shoe_type}</li>
          <li>Fasten Type: {shoe.fasten_type}</li>
          </div>
        ))}
        </ul>
      </div>
    );

  }
}

export default App;
