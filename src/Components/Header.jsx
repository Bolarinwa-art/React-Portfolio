import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class Header extends React.Component {
    render() {
        return ( 
            <Jumbotron className="jumbotron-header-container">
                <h1 className="jumbotron-header"> My Portfolio</h1>
                <p className="jumbotron-paragraph"> I am a motivated and committed individual with many accomplishments over the years which has taught me that achieving goals requires hard work and dedication. I have a key interest in learning about cyber, programming and technology. I am an outgoing, confident person with excellent communication skills. I am an individual that thrives off challenges and always strives to reach my full potential. By Studying A-Level computer Science i was taught the basis of computing,as well as the concepts of data structure, object -oriented programming and computational thoughts. Throughout my education I have demonstrated a high level of motivation ,work ethic and teamwork,I wish to utilize these skills to develop myself as a Solution Architect</p>
                <div className="headerbutton-container">
                    <Button variant="primary"> Scroll Down</Button>
                </div>
            </Jumbotron>
        )
    }
}
export default Header;