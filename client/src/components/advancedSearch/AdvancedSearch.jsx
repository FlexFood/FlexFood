import React, { Component } from 'react'
import IngredientBox from "../ingredientBox";
import ingredients from '../../ingredients.json';

export default class AdvancedSearch extends Component {
    constructor() {
        super();
        this.state = {
            ingredients,
            searchArray: null
        }
    }

    findIngredients = event => {
        event.preventDefault();
        let searchArray = this.state.ingredients.filter(ingredient => {
            return !ingredient.name.indexOf(event.target.value.toLowerCase())
        });
        this.setState({
            searchArray: searchArray
        })
    }

    render() {
        return (
            <div id="advancedSearch">
                <h1>¿Qué tienes en la nevera?</h1>
                <input
                    id="advancedSearch-bar"
                    type="text"
                    placeholder="Search"
                    onChange={this.findIngredients}
                />

                {(this.state.searchArray  
                && this.state.searchArray.length <this.state.ingredients.length
                && this.state.searchArray.map((ingredient, index) => {
                    return (<IngredientBox name={ingredient.name} 
                        img={ingredient.image} key={index} />)
                }))}

            </div>
        )
    }
}
