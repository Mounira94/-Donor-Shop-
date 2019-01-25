import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class MotivationToBuy extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-motivation">
                <div className="motivation-div ">
                    <Link to="/Shop/MenFashion" className="motivation-text-link">
                        <img className="motivation-div-img" src="https://images.pexels.com/photos/69212/pexels-photo-69212.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                    </Link>
                    <h1 className="motivation-text motivation-title-div1 ">HURRY UP!</h1>
                    <p className="motivation-text motivation-text-div1 ">DON'T MISS YOUR CHANCE TO BE THE FIRST!</p>

                </div>
                <div className="motivation-div ">
                <Link to="/Shop/WomenFashion" className="motivation-text-link">
                    <img className="motivation-div-img" src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </Link>
                    <h1 className="motivation-text motivation-title-div2 ">FRESH LOOK!</h1>
                    <p className="motivation-text motivation-text-div2">GET UP TO 15% OFF</p>

                </div>
                <div className="motivation-div">
                <Link to="/Shop/KidsFashion" className="motivation-text-link">
                    <img className="motivation-div-img" src="https://images.pexels.com/photos/6105/flowers-shoes-white-modern.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
                </Link>
                    <h1 className="motivation-text motivation-title-div3 ">WINTER / SPRING COLLECTION 2019</h1>

                </div>
            </section >
        );
    }
}
export default MotivationToBuy;