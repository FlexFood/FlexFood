import React, { Component } from 'react'
import './AdvancedSearch.css'
import { Redirect } from "react-router-dom";
import IngredientBoxAdd from "./ingredientBox/ingredientBoxAdd";
import AdvancedSearchForm from "./advancedSearchForm";
import ingredients from '../../ingredients.json';
import EdamamService from '../../services/EdamamService';

export default class AdvancedSearch extends Component {
    constructor() {
        super();
        this.state = {
            ingredients,
            searchArray: null,
            ingredientsSelected: [],
            search: "",
            healthLabels: [],
            dietLabels: []
        }

        this.edamamService = new EdamamService()


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

  
    render() {
        if(this.props.redirectToRecipes) {
            return <Redirect to="/recipes" />
          }
        return (
            <div id="advancedSearch">

                <div className="quickSearch"></div>


                <div className="advancedSearchBox">
                    <h2>¿Qué tienes en la nevera?</h2>

                    <form onSubmit={this.addIngredientFormSubmit} autocomplete="off">
                        <input
                            id="advancedSearch-bar"
                            type="text"
                            placeholder="Search"
                            onChange={this.findIngredients}
                        // Gabiiii: value={this.state.search}
                        />
                    </form>

                    {(this.state.searchArray
                        && this.state.searchArray.length < this.state.ingredients.length
                        && this.state.searchArray.map((ingredient, index) => {
                            return (<IngredientBoxAdd name={ingredient.name}
                                img={ingredient.image} keys={index}
                                addIngredient={this.props.addIngredient} />)
                        }))}
                </div>

                <AdvancedSearchForm
                    ingredientsSelected={this.props.ingredientsSelected}
                    handleFormAdvancedSubmit={this.props.handleFormAdvancedSubmit}
                    deleteIngredient={this.props.deleteIngredient}
                    handleChangeChecked={this.props.handleChangeChecked}
                    user={this.props.user}
                />

            </div>
        )
    }
}
