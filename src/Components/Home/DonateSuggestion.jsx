import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class DonateSuggestion extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-donation-suggestion">       
            <h1 className=" donation-suggestion-text">Give Cloths and Make a fashion statement </h1>
            <h1 className=" donation-suggestion-text">Take a stand against poverty </h1>
            <img className="donation-suggestion-img" src="https://i.imgur.com/WOf176R.jpg" />
            <h1 className=" donation-suggestion-text">your unwanted clothes</h1>
            <Link to="/Donate" className="btn-donate-now">Donate Now!</Link>
            </section >
        );
    }
}
export default DonateSuggestion;