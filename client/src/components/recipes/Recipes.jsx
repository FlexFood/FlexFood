import React, { Component } from 'react';
// import axios from 'axios';

export default class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfRecipes: null
    };
  }

  getByLabel = () => {
    console.log(this.props)
    // axios
    //   .get(`https://test-es.edamam.com/search?q=${this.props.search}&app_id=71685624&app_key=40cc36ad5a53b6207a187b1579302729`)
    //   .then(responseFromApi => {
    //     console.log(responseFromApi)
    //     this.setState(
    //       { ...this.state, listOfRecipes: responseFromApi.data },
    //     );
    //   })
    //   .catch(err=>{
    //     console.log("error peticion api externa")
    //   })
  };

  componentDidMount(){
    this.getByLabel()
  }

  render() {

    return (
      <div>
        <h1>Holita desde {this.props.searchPet}</h1>
      </div>
    )
  }
}
