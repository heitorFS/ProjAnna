import React from "react";
import '../css/Home.css';

import Attribute from './Attribute';

const Home = () => {
    return (
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
                    <Attribute name="Max HP" value="5" />
                    <Attribute name="Creativity" value="5" />
                    <Attribute name="Wisdom" value="4" />
                    <Attribute name="Speed" value="4" />
                </div>
            </div>
            <div className="name">
                Anna
            </div>
            <div className="continue">
                 <div className="prompt">DO YOU WISH TO<br />CONTINUE?</div>
                 <div>NO</div>
                 <div className="blink">YES</div>
            </div>
        </div>
    )
};

export default Home;