import React , {Component } from 'react';
import './Pokecard.css'
//const POKEAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
const POKEAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
let padToThree = (number) =>( number <= 999 ? `00${number}`.slice(-3): number)
class Pokecard extends Component {
    render(){
        let imgSrc = `${POKEAPI}${padToThree(this.props.id)}.png`
        return(
            <div className = 'Pokecard'>
                <h1 className = 'Pokecard-title'>{this.props.name}</h1>
                <div className = "Pokecard-img"><img src = {imgSrc} alt = {this.props.name}/></div>
                <div className = 'Pokecard-data'> Type : {this.props.type} </div>
                <div className = 'Pokecard-data'> Base Exp : {this.props.exp} </div>
            </div>
        );
    }
}
export default Pokecard;