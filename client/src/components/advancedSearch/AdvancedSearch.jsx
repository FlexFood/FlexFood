import React, { Component } from 'react'
import { Redirect } from "react-router-dom";
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';

import './AdvancedSearch.css'

import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";
import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import HealthLabels from '../healthLabels'
//import AdvancedSearchForm from "./advancedSearchForm";
//import ingredients from '../../ingredients.json';

import EdamamService from '../../services/EdamamService';

export default class AdvancedSearch extends Component {
    constructor() {
        super();
        this.state = {
            //ingredients,
            searchArray: null,
            ingredientsSelected: [],
            search: "",
            value: { min: 2, max: 10 },
            healthLabels: [],
            redirectToRecipes: false
        }

        this.edamamService = new EdamamService()


    }

    //LÓGICA DEL --INGRSIENT-SELECTED--

    addIngredientSelected = inputLabel => {
        let ingredientsSelected = this.state.ingredientsSelected;
        if (!this.state.ingredientsSelected
            .find(ingredient => ingredient === inputLabel))
            ingredientsSelected.push(inputLabel);
        this.setState({
            ingredientsSelected
        });
    };

    deleteIngredientSelected = event => {
        var ingredientsSelected = this.state.ingredientsSelected;
        ingredientsSelected.splice(ingredientsSelected.indexOf(event), 1);
        this.setState({
            ingredientsSelected
        });
    };


    //HEALTHLABELS
    handleChange = e => {

        let inputLabel = e.target.value;
        let healthLabels = this.state.healthLabels;
        (!healthLabels.some(label => label === inputLabel))
            ? healthLabels.push(inputLabel)
            : healthLabels.splice(healthLabels.indexOf(inputLabel), 1)


        this.setState({ ...this.state, healthLabels });
    };

    componentDidMount() {
        this.userDefault();
    }

    userDefault = healthLabels => {
        if (this.props.user)
            healthLabels = this.props.user.healthLabels;
        this.setState({
            healthLabels
        });
    }

    //API

    handleFormSubmit = e => {
        e.preventDefault();

        console.log('Pasa por handleFormAdvSubm en App')
        console.log(this.state)

        let { ingredientsSelected, healthLabels } = this.state;

        if (
            Object.values({ ingredientsSelected, healthLabels }).every(
                element => !element.length
            )
        ) {
            console.log("No pudesn estar todos vacios!!!!!!!!!!!!!");
            return;
        }
        

        this.edamamService
            .advancedSearch({ ingredientsSelected, healthLabels })
            .then(recipes => {
                console.log('Respuesta en front')
                console.log(recipes)

                this.props.setRecipes(recipes.data);
                    this.setState({
                        ...this.state,
                        recipes: recipes.data,
                        redirectToRecipes: true
                    });

            });
    };


    render() {
        if (this.state.redirectToRecipes) {
            return <Redirect to="/recipes" />;
        }
        return (
            <form id="advancedSearch" onSubmit={this.handleFormSubmit}>
<InputRange
                            maxValue={20}
                            minValue={0}
                            value={this.state.value}
                            onChange={value => this.setState({ value })} />
                <section className="left">
                    <p>CaloriesForDinner</p>
                    <div className="row">
                        
                        <input type="range" min="0" max="10000" />
                        <input type="range" min="0" max="10000" />
                    </div>
                    <p>Time</p>
                    <div className="row">
                        <input type="range" min="0" max="10000" />
                        <input type="range" min="0" max="10000" />
                    </div>
                    <IngredientFormAdd addIngredientSelected={this.addIngredientSelected} />
                </section>
                <section className="center">
                    <IngredientFormDelete
                        deleteIngredientSelected={this.deleteIngredientSelected}
                        ingredientsSelected={this.state.ingredientsSelected}
                    />
                </section>
                <section className="rigth">
                    <HealthLabels handleChange={this.handleChange} user={this.props.user} />
                </section>

                <input type="submit" value="Search yours recipes!!" />

            </form>
        )
    }
}
