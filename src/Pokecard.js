import React, {Component} from 'react';
import './Pokecard.scss';

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

class Pokecard extends Component {
    static defaultProps = {
        id: 100,
        name: 'Mew',
        type: 'Omega Level Son',
        base_experience: 999
    }

    padWithZeroes = (num) => {
        let id = num.toString();
        
        if (id.length === 2) {
            return `0${id}`; 
        } else if (id.length === 1) {
            return `00${id}`;
        } else {
            return id;
        }
    }

    render() {
        return (
            <div className="Pokecard">
                <h2>{this.props.name}</h2>
                <img src={`${POKE_API}${this.padWithZeroes(this.props.id)}.png`} alt={`${this.props.name}`}/>
                <p>{this.props.type}</p>
                <p>{this.props.base_experience}</p>
            </div>
        );
    }
  
}

export default Pokecard;
