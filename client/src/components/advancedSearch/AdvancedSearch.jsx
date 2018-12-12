import React, { Component } from 'react'
import IngredientBox from "./ingredientBox";
import AdvancedSearchForm from "./advancedSearchForm";
import ingredients from '../../ingredients.json';

export default class AdvancedSearch extends Component {
    constructor() {
        super();
        this.state = {
            ingredients,
            searchArray: null,
            ingredientsSelected: [],
            search: ""
        }
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
    addIngredient = event => {
        let ingredientsSelected = this.state.ingredientsSelected;

        //La idea es que solo pushee si no hay otro igual en seleccionados
        if(!this.state.ingredientsSelected.find(ingredient => ingredient === event ))
        ingredientsSelected.push(event);
        console.log(ingredientsSelected)
        this.setState({
            ingredientsSelected
        })
    }
    addIngredientFormSubmit = event => {
        event.preventDefault();
        let ingredt = this.state.search;
        let isAnIngredient = this.state.ingredients.some(ingredient => {
            return ingredient.name === ingredt
        } )
        if(isAnIngredient) this.addIngredient(ingredt); 
    }

    render() {
        return (
            <div id="advancedSearch">

                <div className="quickSearch"></div>


                <div className="advancedSearchBox">
                    <h1>¿Qué tienes en la nevera?</h1>

                    <form onSubmit={this.addIngredientFormSubmit} autocomplete="off">
                    <input 
                        id="advancedSearch-bar"
                        type="text"
                        placeholder="Search"
                        onChange={this.findIngredients}
                    />
                    </form>

                    {(this.state.searchArray
                        && this.state.searchArray.length < this.state.ingredients.length
                        && this.state.searchArray.map((ingredient, index) => {
                            return (<IngredientBox name={ingredient.name}
                                img={ingredient.image} keys={index} 
                                addIngredient={this.addIngredient} />)
                        }))}
                </div>
                
                <AdvancedSearchForm />

            </div>
        )
    }
}
