import React from "react";
import { HomePageBackground } from "./HomePageStyle";
import erleImg from "../../assets/erle_pic.jpeg";
import Signature from "../../assets/erle_logo";


// todo: blobs necessary?
// todo make image its own component
// todo different img sizes for different screens
function HomePage () {
    return <HomePageBackground>
        <div className="home-page">
            <div className="blobs"></div>
            <div className="home-page__content">
                <div className="home-page__content__intro">
                    <Signature/>
                    <div className="home-page__content__intro__image">
                        <img src={erleImg} alt="image of Erle"/>
                    </div>
                    <div className="home-page__content__intro__banner heading--medium">
                        Front end development is <span>awesome</span> <span>...</span>
                    </div>
                </div>
                <div className="theme-content">
                    <button>Choose a theme</button>
                    <p>On Fire</p>
                    <p>Sakura Season</p>
                    <p>Defying Gravity</p>
                    <p>10,000 Miles under the Sea</p>
                </div>
            </div>
        </div>
    </HomePageBackground>;
}

export default HomePage;