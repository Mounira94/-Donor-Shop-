import React, { Component } from 'react';
class AboutDescription extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <section className="section-about-description">
                <div className="about-description">
                    <h1 className="about-description-title">About Us</h1>
                    <h2 className="about-description-subtitle">Today we’re looking at you – year round, endurance envied runner!</h2>
                    <p className="about-description-text">As a traveler and adventurer, you know that as you become well-traveled,
                    so do most of your clothes. Your closet is probably full of clothes that you no longer wear; perhaps they’re a
                 little too worn out or they don’t fit as well anymore.Instead of letting unwanted clothes gather dust in your closet,
                 what do you actually do with that Mount Everest of clothes you’re ready to get rid of?  why not help out those who could
                  really use extra clothing?.Donate them to a charity, try your hand at selling them, or swap them for something that will
          see the light of day and instead of this donation you will take points to buy fashion cloths from our mark</p>
                    <img src="https://www.thesmallproject.org.uk/images/tsp_bundle.png" alt="Donate" />
                </div>
                <div className="about-founder">
                    <h1 className="about-founder-title">The Founder</h1>
                    <p className="about-founder-text">Whether it’s that raise you’ve been seeking or finding the love of your life. The obstacles we face in life can be discouraging from actualizing your dreams and it can feel easier to give up.
 The truth is that we have every right to go for exactly what we want in life but often times there are roadblocks that feel really challenging.</p>
                </div>
                <div className="about-statistic">
                        <div className="about-statistic-texts">
                            <p className="about-statistic-text"> 1</p>
                            <p className="about-statistic-text">Brands</p>
                        </div>
                        <div className="about-statistic-texts">
                            <p className="about-statistic-text">1</p>
                            <p className="about-statistic-text">Stores</p>
                        </div>
                        <div className="about-statistic-texts">
                            <p className="about-statistic-text">0</p>
                            <p className="about-statistic-text">Happy Clients</p>
                        </div>
                    </div>
            </section >
        );
    }
}
export default AboutDescription;