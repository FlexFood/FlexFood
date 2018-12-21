import React, { Component } from "react";
import "./Modal.css";
import Login from "../login";
import Signup from "../signup";

export default class Modal extends Component {
 
    render() {
        const showHideClassName = this.props.show 
        ? "modal display-block" 
        : "modal display-none";
        let showChildren = (this.props.children === "Login")
        ? <Login setUser={this.props.setUser} close={this.props.close}/> 
        : <Signup setUser={this.props.setUser} close={this.props.close}/>
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