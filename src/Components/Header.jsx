import React, { Component } from 'react';
import {Link } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <header className="header">
                <div className="header-brand">
                    <div className="brand">
                        <img className="logo" src="https://i.imgur.com/xwbLROs.png" alt="Donor Shop logo" />
                    </div>
                    <nav className="nav-bar">
                        <ul className="nav-menu">
                            <li className="nav-items ">
                                <Link className="nav-link nav-link-active " to="/Home"> HOME </Link>
                            </li>
                            <li className="nav-items">
                                <Link className="nav-link" to="/About">ABOUT</Link>
                            </li>
                            <li className="nav-items">
                                <Link className="nav-link" to="#">SHOP</Link>
                                <ul className="departement-items">
                                    <li className="departement-item">
                                        <Link className="departement-item-link" to="/Shop/WomenFashion">WOMEN FASHION</Link>
                                    </li>
                                    <li className="departement-item">
                                        <Link className="departement-item-link" to="/Shop/MenFashion">MEN FASHION</Link>
                                    </li>
                                    <li className="departement-item">
                                        <Link className="departement-item-link" to="/Shop/KidsFashion">KIDS FASHION</Link>
                                    </li>
                                    <li className="departement-item">
                                        <Link className="departement-item-link" to="/Shop/SportFashion">SPORT FASHION</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-items">
                                <Link className="nav-link" to="/Donate">DONATE</Link>
                            </li>
                        </ul>
                    </nav>
                    <nav className="nav-compte">
                        <div className="search-div">
                            <i className="fas fa-search"></i>
                            <input type="text" className="search-text" onChange={this.props.searchMovie} />
                        </div>
                        <Link className="sign-link" to="/SignIn"><i className="fas fa-user"></i></Link>
                        <Link className="basket-link" to="/Basket"><i className="fas fa-shopping-basket"></i></Link>
                        {/* <span className="nbr-produit">0</span> */}
                    </nav>
                </div>

            </header>
        )
    }
}
export default Header;

