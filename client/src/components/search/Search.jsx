import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import { css } from 'react-emotion';
import { PulseLoader } from 'react-spinners';
import "./Search.css";

import EdamamService from "../../services/EdamamService";


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

export default class Search extends Component {
  constructor() {
    super()
    this.state = {
      search: "",
      value: "search",
      classNameLoading: "on",
      loading: false
    }
    this.edamamService = new EdamamService();
  }

  handleChange = e => {
    const { value } = e.target;
    this.setState({ ...this.state, search: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const search = this.state.search;
    if(search === "") return
    this.loadingChange();
    this.edamamService.getByLabel(search).then(recipes => {
      console.log(recipes)
      this.props.setRecipes(recipes, search)
      this.setState({
        ...this.state,
        recipes: recipes.data,
        redirectToRecipes: true
      });
    });
  };

  loadingChange = () => {
    this.setState({
      ...this.state,
      classNameLoading: "off",
      loading: true
    });
  }

  render() {


    if (this.state.redirectToRecipes) {
      return <Redirect to="/recipes" />;
    }

    return (
      <div id="search">
        <form onSubmit={this.handleFormSubmit}>
          <input
            id="input-search"
            type="search"
            onChange={e => this.handleChange(e)}
          />
          <input 
          id="input-submit" 
          //className={this.state.classNameLoading}
          type="submit" 
          value={this.state.value} />
          <PulseLoader
            className={override}
            sizeUnit={"px"}
            size={15}
            color={'#5e5e5e'}
            loading={this.state.loading}
          />
        </form>
        <div id="box-1">
          <div id="menu-1">
            <div className="menu-card">
              <h2>
                Recipes Finder <span>PRO</span>
              </h2>
              <p>
                You're late home and you don't know what to eat ... Now
                everything is much easier. Enter the food you have in your
                fridge and pantry and we will make a selection of the recipes
                that best suit you.
              </p>
              <Link to="/advancedSearch">Go!</Link>
            </div>
          </div>
          <div id="img-1" />
        </div>
        <div id="box-2">
          <div id="img-2" />
          <div id="menu-2">
            <div className="menu-card">
              <h2>Converter</h2>
              <p>
                You have guests and the recipe you are going to prepare is for
                fewer people than you are going to eat ... Your mother's cake
                recipe is for 6 people and you are just ... Now it is no longer
                a problem.
              </p>
              <Link to="/converter">Go!</Link>
            </div>
          </div>
        </div>
        <div id="box-3">
          <div id="menu-3">
            <div className="menu-card">
              <h2>Menu Generator</h2>
              <p>
                You do not know what to prepare food day after day ... Now you
                do not have to weigh more. With a menu generator you can adjust
                your meals to your tastes and preferences.
              </p>
              <Link to="/meal">Go!</Link>
            </div>
          </div>
          <div id="img-3" />
        </div>
      </div>
    );
  }
}
