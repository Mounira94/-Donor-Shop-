import React, { Component } from 'react';
class DonateSuggestionPoint extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-donation-suggestion-gift"> 
            <div className="donation-suggestion-gift">
            <p className="donation-suggestion-gift-question">have you donate your clothes yet?</p>    
            <p className="donation-suggestion-gift-advice">If you have clothes taking up space in your closet, why not donate them and you will get a fashion gift instead!!! </p>  
            </div>
           <div className="donation-suggestion-gift-imgs">
            <img className="donation-suggestion-gift-img" src="https://eleoonline.com/wp-content/uploads/2017/11/Donate-Clothes-Dress-For-Success-Eleo-Blog.jpg" />
            <img className="donation-suggestion-gift-img" src="https://grkids.com/wp-content/uploads/2014/11/Donating-in-Grand-Rapids-feature-image.jpg" />
            </div>

            </section >
        );
    }
}
export default DonateSuggestionPoint;