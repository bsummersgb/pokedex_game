import React, {Component} from 'react';
import './Pokecard.scss';

const POKE_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

class Pokecard extends Component {
    static defaultProps = {
        id: 100,
        name: 'Mew',
        type: 'Omega Level Son',
        base_experience: 999
    }
    render() {
        return (
            <div className="Pokecard">
                <h2>{this.props.name}</h2>
                <img src={`${POKE_API}${this.props.id}.png`}/>
                <p>{this.props.type}</p>
                <p>{this.props.base_experience}</p>
            </div>
        );
    }
  
}

export default Pokecard;
