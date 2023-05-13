import React from "react";
import '../css/Home.css';

import Attribute from './Attribute';

const Home = ({ ChangeTabs }) => {
    return (        
        <div className="main-container-padding">
            <div className="home-grid animate__animated animate__slideInLeft">
                <div className="title">
                    <h1>Select your player</h1>
                </div>
                <div>
                    <img className="face" alt="Anna :D" />
                </div>
                <div className="attributes-container">
                    <div className="attr-title">
                        <h2>Attributes</h2>
                    </div>
                    <div className="attributes">
                        <Attribute name="Max HP" value="7" />
                        <Attribute name="Creativity" value="7" />
                        <Attribute name="Wisdom" value="6" />
                        <Attribute name="Speed" value="5" />
                    </div>
                </div>
                <div className="name">
                    Anna
                </div>
                <div className="continue">
                        <div className="prompt">CONTINUE?</div>
                        <div className="clickable">NO</div>
                        <div className="yes blink clickable" onClick={() => ChangeTabs('Home_2')}>YES</div>
                </div>
            </div>
        </div>
    )
};

export default Home;