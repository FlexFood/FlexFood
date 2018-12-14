import React, { Component } from 'react'
import './AdvancedSearch.css'
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
    addIngredient = event => {
        let ingredientsSelected = this.state.ingredientsSelected;

        //La idea es que solo pushee si no hay otro igual en seleccionados
        if (!this.state.ingredientsSelected.find(ingredient => ingredient === event))
            ingredientsSelected.push(event);
        this.setState({
            ingredientsSelected
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

    deleteIngredient = event => {
        console.log(event, this.state.ingredientsSelected)
        var ingredientsSelected = this.state.ingredientsSelected;
        ingredientsSelected.splice(ingredientsSelected.indexOf(event), 1);
        this.setState({
            ingredientsSelected
        })
    }

    handleChange = e => {
        const { name, value } = e.target;
        let array = [...this.state[name]];

        if (e.target.checked) {
            array.push(value);
            this.setState({ ...this.state, [name]: array });
        } else {
            array.splice(array.indexOf(value), 1);
            this.setState({ ...this.state, [name]: array });
        }
    };

    handleFormAdvancedSubmit = e => {
        e.preventDefault();

        let { ingredientsSelected, healthLabels} = this.state;

        if (Object.values({ ingredientsSelected, healthLabels })
            .every(element => !element.length)) {
            console.log('No pudesn estar todos vacios!!!!!!!!!!!!!')
            //SACAR MENSAJE Y REDIRIGIR A LA MISMA URL
            return
        }

        this.edamamService.advancedSearch({ ingredientsSelected, healthLabels})
            // .then(recipes => {
            //     console.log(recipes)
            // })
    };

    render() {
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
                                addIngredient={this.addIngredient} />)
                        }))}
                </div>

                <AdvancedSearchForm
                    ingredientsSelected={this.state.ingredientsSelected}
                    handleFormAdvancedSubmit={this.handleFormAdvancedSubmit}
                    deleteIngredient={this.deleteIngredient}
                    handleChange={this.handleChange}
                />

            </div>
        )
    }
}
