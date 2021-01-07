import React, { Component } from 'react';

class TrainedPokemon extends Component {
  constructor() {
    super(); // nécessaire pour l'héritage de classe

    // initialisation du state
    this.state = {
      exp: 0,
    };
    this.gainExp = this.gainExp.bind(this);
  }

  gainExp() {
    const { exp } = this.state;

    console.log('EXP', exp);

    this.setState({
      exp: exp + 10,
    })

  }

  render() {
    const { name, weight, src } = this.props;
    const { exp } = this.state;

    function displayName() {
      console.log('Je suis', name);
    }

    return (
      <li className="TrainedPokemon" onMouseMove={this.gainExp}>
        <div className="name">{name}</div>
        <div className="weight">{weight} kg</div>
        {src && <img src={src} alt={name} />}
        <div className='exp'>{exp}</div>
      </li>
    );
  }
}

export default TrainedPokemon;
