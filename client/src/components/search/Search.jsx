import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class Search extends Component {

  render() {
    return (
      <div id="search-bar">
        <form onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            value={this.props.search}
            onChange={e => this.props.handleChange(e)}
          />
          <Link to="/recipes" search={this.props.search}><input type="submit" value="Buscar" /></Link>
        </form>
      </div>
    );
  }
}
