import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import './AdvancedSearch.css'
import IngredientFormAdd from "../ingredientForm/ingredientFormAdd";
import IngredientFormDelete from "../ingredientForm/ingredientFormDelete";
import HealthLabels from "../healthLabels";
//import AdvancedSearchForm from "./advancedSearchForm";
//import ingredients from '../../ingredients.json';
import EdamamService from "../../services/EdamamService";
import { css } from "react-emotion";
import { PulseLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



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
    //Ternario de search

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
        !healthLabels.some(label => label === inputLabel)
            ? healthLabels.push(inputLabel)
            : healthLabels.splice(healthLabels.indexOf(inputLabel), 1);

        this.setState({ ...this.state, healthLabels });
    };

    // componentDidMount() {
    //     this.userDefault();
    // }

    // userDefault = healthLabels => {
    //     if (this.props.user) healthLabels = this.props.user.healthLabels;
    //     this.setState({
    //         healthLabels
    //     });
    // };

    loadingChange = () => {
        this.setState({
          ...this.state,
          loading: true
        });
      };

    //API

    handleFormSubmit = e => {
        e.preventDefault();

        console.log("Pasa por handleFormAdvSubm en App");
        console.log(this.state);

        let { ingredientsSelected, healthLabels } = this.state;

        if (
            Object.values({ ingredientsSelected, healthLabels }).every(
                element => !element.length
            )
        ) {
            console.log("No pudesn estar todos vacios!!!!!!!!!!!!!");
            return;
        }
        this.loadingChange();
        this.edamamService
            .advancedSearch({ ingredientsSelected, healthLabels })
            .then(recipes => {
                console.log("Respuesta en front");
                console.log(recipes);

                this.props.setRecipes(recipes)
                this.setState({
                    ...this.state,
                    recipes: recipes.data,
                    redirectToRecipes: true

                });
            });
    };

    render() {
        if (this.state.redirectToRecipes) {
            return <Redirect to="/recipes" />
        }

let search = "Search yours recipes!";

        if(this.state.loading){
            search = (   <PulseLoader
              className={override}
              sizeUnit={"px"}
              size={10}
              color={"#dbdbdb"}
              loading={this.state.loading}
            />)
          }

        return (
            <form id="advancedSearch" onSubmit={this.handleFormSubmit}>
                <div id="advenced-search-container" >
                    <section className="advanced-search-box">
                        <IngredientFormAdd
                            addIngredientSelected={this.addIngredientSelected}
                        />
                    </section>
                    <section className="advanced-search-box" id="box-submit">
                        <IngredientFormDelete
                            deleteIngredientSelected={this.deleteIngredientSelected}
                            ingredientsSelected={this.state.ingredientsSelected}
                        />
                        <button type="submit" id="submit-advanced">{search}</button>
                    </section>
                    <section className="advanced-search-box">
                        <HealthLabels
                            handleChange={this.handleChange}
                            user={this.props.user}
                        />
                    </section>
                </div>
            </form>
        );
    }
}
