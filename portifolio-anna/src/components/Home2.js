import React from "react";
import '../css/Home.css';

const Home2 = ({ ChangeTabs }) => {
    return (
        <div className="main-container-padding">
            <div className="home-grid-2 animate__animated animate__slideInLeft">
                <div>
                    <img className="face" alt="Anna :D" />
                </div>
                <div className="desc-container">
                Hi there! My name is Anna and I am a Graphic Design student based in Manchester. I have been a student since 2022, and since then, I have been exploring and developing my skills in this exciting field. As a designer, I take pride in my ability to adapt to different styles and cater to various design needs. From minimalistic and sleek designs to bold and vibrant ones, I am always up for a creative challenge.<br /> Thank you for taking the time to view my portfolio. I hope you enjoy my work as much as I enjoyed creating it!
                </div>
                <div className="name">
                    Anna
                </div>
                <div className="continue">
                        <div className="prompt">CONTINUE?</div>
                        <div className="clickable">NO</div>
                        <div className="yes blink clickable" onClick={() => ChangeTabs('Projects')}>YES</div>
                </div>
            </div>
        </div>
    );
};

export default Home2;