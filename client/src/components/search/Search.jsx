import React, { Component } from "react";
import { Link } from "react-router-dom";
import EdamamService from "../../services/EdamamService";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };

    this.edamamService = new EdamamService();
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const search = this.state.search;

    this.edamamService.getByLabel(search)
    .then(recipes => {
      console.log(recipes.data);
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ ...this.state, search: value });
  };

  render() {

    //redirect to recipes

    return (
      <div id="search-bar">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={this.state.search}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Buscar" />
        </form>
      </div>
    );
  }
}
