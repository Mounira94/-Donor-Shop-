import React, { Component } from 'react';
import Axios from 'axios';
class DonateFormulaire extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:"",
            lastName:"",
            phone:"",
            adress:"",
            email:"",
            password:"",
            numberOfDonation:"",
            articleGiven:"",
            sendMode:""
        }
    }
    onChange = (event) => {
        if (event.target.value != "") {
            this.setState({ [event.target.name]: event.target.value });
        }
    }
    onAddDonationPressed=()=>
    {
        Axios.post("/addDonation",{...this.state})
        .then(res=> alert(res.data))
        .catch(err=>alert(err));
    }
    render() {
        return (
            <section className="donation">
                <h1 className="donate-title">Donate Form</h1>
                <form className="donate-form">
                    <input type="text" name="firstName" onChange={this.onChange} className="donate-input" placeholder="First Name" />
                    <input type="text" name="lastName" onChange={this.onChange} className="donate-input" placeholder="Last Name" />
                    <input type="Tel"  name="phone" onChange={this.onChange} className="donate-input" placeholder="Adress" />
                    <input type="text" name="adress" onChange={this.onChange}  className="donate-input" placeholder="E-mail" />
                    <input type="text" name="email" onChange={this.onChange} className="donate-input" placeholder="Phone Number" />
                    <input type="Number" name="numberOfDonation" onChange={this.onChange} className="donate-input" placeholder="Number of Donations" />
                    <input type="text" name="articleGiven" onChange={this.onChange} className="donate-input" placeholder="Articles Given" />
                    <input type="text" name="sendMode" onChange={this.onChange} className="donate-input" placeholder="Send Mode" />
                    {/* <div className="donate-form-donate-mode">
                        <label className="donate-mode-text">Send Mode :</label>
                        <input type="radio" name="gender" value="Store" className="donate-mode-radio-btn" />Store
                        <input type="radio" name="gender" value="Association" className="donate-mode-radio-btn"  />Association
                        <input type="radio" name="gender" value="Your House" className="donate-mode-radio-btn"  />Your House
                    </div> */}
                   <input type="submit" value="Donate" onClick={this.onAddDonationPressed} className="donate-mode-submit-btn"/>
                </form>
            </section >
        );
    }
}
export default DonateFormulaire;