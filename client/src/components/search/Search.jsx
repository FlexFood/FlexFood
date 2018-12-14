import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Search.css";

export default class Search extends Component {

  render() {

    if(this.props.redirectToRecipes) {
      return <Redirect to="/recipes" />
    }

    return (
      <div id="search">
        <form onSubmit={this.props.handleFormSubmit}>
          <input
            type="text"
            onChange={e => this.props.handleChange(e)}
          />
          <input type="submit" value="Buscar" />
        </form>
      </div>
    );
  }
}
