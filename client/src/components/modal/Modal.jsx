import React, { Component } from "react";
import "./Modal.css";
import Login from "../login";
import Signup from "../signup";

export default class Modal extends Component {
    // constructor() {
    //     super();
    //     this.state = {

    //     }
    // }
    //this.props.handleClose
    //show
    //children

    render() {
        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
        let showChildren = (this.props.children === "Login")
        ? <Login getUser={this.props.getUser} close={this.props.close}/> 
        : <Signup getUser={this.props.getUser} close={this.props.close}/>
        return (
            <div className={showHideClassName}>
                <section className="modal-main">
                    {showChildren}
                    <button onClick={this.props.handleClose}>close</button>
                </section>
            </div>
        );
    }
}