import React, { Component } from "react";
import "./ShowMenu.css";

//LO COMENTADO DIFIERE DEL SAVEMENU
//import AuthService from "../../../services/AuthService";

export default class ShowMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: []
        };
        // this.recipesInit();
        //this.authService = new AuthService();
    }

    recipesInit = () => {
        this.setState({
            ...this.state,
            menu: this.props.menu
    //   recipesLunch: this.props.menu.recipesLunch,
    //   recipesDinner: this.props.menu.recipesDinner
    });
    };

    componentWillMount() {
        this.recipesInit();
    }

    componentWillReceiveProps() {
        this.recipesInit();

    }


    render() {
        if(this.state.menu && this.state.menu.length !== 0)
        {
            // this.recipesInit();
        console.log(this.state, "STATE ENSHOWMENU ya debería estar menu")
        return (
            <form id="save-menu" onSubmit={this.handleFormSubmit}>
                <table id="table-menu">
                    <thead>
                        <tr>
                            {this.state.menu.recipesLunch.map((day, i) => {
                                return (
                                    <td className="title-box">
                                        <h4>Day {i + 1}</h4>
                                    </td>
                                );
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {this.state.menu.recipesLunch.map((day, i) => {
                                return (
                                    <td className="lunch-box" >
                                        <p>{day.recipe.label}</p>
                                        <p>{day.recipe.calories.toFixed(0)}</p>
                                        <p>{day.recipe.totalTime}</p>
                                    </td>
                                );
                            })}
                        </tr>
                        <tr>
                            {this.state.menu.recipesDinner.map(day => {
                                return (
                                    <td className="dinner-box">
                                        <p>{day.recipe.label}</p>
                                        <p>{day.recipe.calories.toFixed(0)}</p>
                                        <p>{day.recipe.totalTime}</p>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
                <input id="submit-save-menu" type="submit" value="Save your menu" />
            </form>
        );}
        else{
            return <p>Loading...</p>
        }
    }
}