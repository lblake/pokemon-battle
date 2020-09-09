import React, { Component } from 'react';
import './Pokecard.css'
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component {
  render() {
    let padNum = pad(this.props.id, 3);
    let imgSrc = `${POKE_API}${padNum}.png`;
    return (
      <div className='Pokecard'>
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} />
        <div>Type: {this.props.type}</div>
        <div>EXP: {this.props.exp}</div>
      </div>
    );
  }
}
// function to add leading zeros(0) to pokemon image numbers
function pad(num, len) {
  return ('000' + num).substr(-len);
}

export default Pokecard;
