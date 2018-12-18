import React, { Component } from 'react'
import ingredients from '../ingredients.json';
import IngredientBoxAdd from './ingredientBoxAdd';
import "./IngredientFormAdd.css"

export default class IngredientFormAdd extends Component {
    constructor() {
        super();
        this.state = {
            ingredients,
            searchArray: null,
            search: ""
        }
    }
    //LOGICA DEL ENTER PARA AÑADIR
    addIngredientFormSubmit = event => {
        event.preventDefault();
        let ingredt = this.state.search;
        let isAnIngredient = this.state.ingredients.some(ingredient => {
            return ingredient.name === ingredt
        })
        if (isAnIngredient) {
            this.addIngredient(ingredt)
            this.setState({ ...this.state, search: '' })
        };
    }
    findIngredients = event => {
        event.preventDefault();

        let searchArray = this.state.ingredients.filter(ingredient => {
            return !ingredient.name.indexOf(event.target.value.toLowerCase())
        });
        this.setState({
            searchArray,
            search: event.target.value
        })
    }


    render() {
        return (
            <div className="ingredient-form-add">
                <h2>Add your ingredients...</h2>
                <hr className="line" />
                <form onSubmit={this.addIngredientFormSubmit} autocomplete="off">
                    <input
                        id="advancedSearch-input"
                        type="text"
                        placeholder="Search..."
                        onChange={this.findIngredients}
                    // Gabiiii: value={this.state.search}
                    />
                </form>

                {(this.state.searchArray
                    && this.state.searchArray.length < this.state.ingredients.length
                    && this.state.searchArray.map((ingredient, index) => {
                        return (<IngredientBoxAdd name={ingredient.name}
                            img={ingredient.image} keys={index}
                            addIngredientSelected={this.props.addIngredientSelected} />)
                    }))}
            </div>
        )
    }
}




