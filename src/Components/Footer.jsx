import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Footer extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="footer">
                <img src="https://i.imgur.com/xwbLROs.png" alt="" className="footer-img" />
                <div className="footer-information">
                    <h1 className="footer-information-title"> Information</h1>
                    <Link to="/Home" className="footer-information-text">Home</Link>
                    <Link to="/About" className="footer-information-text">About</Link>
                    <Link to="/Shop/WomenFashion" className="footer-information-text">Shop</Link>
                    <Link to="/Donate" className="footer-information-text">Donate</Link>
                </div>
                <div className="footer-information">
                    <h1 className="footer-information-title">Store Information</h1>
                    <p className="footer-information-text">	Address: Centre ville,Sfax</p>
                    <p className="footer-information-text">Phones: +(216) 2345-6789:+(216) 7445-6790</p>
                    <p className="footer-information-text">	Hours: 7 Days a week from 9:00am to 7:00 pm</p>
                    <p className="footer-information-text">	E-mail: info@demolink.org</p>
                </div>
            </div >
        );
    }
}
export default Footer;