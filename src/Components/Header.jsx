import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

class Header extends React.Component {
    render() {
        return ( 
            <Jumbotron className="jumbotron-header-container">
                <h1 className="jumbotron-header"> My Portfolio</h1>
                <p>A showcase of my project, Passion and abilities</p>
                <div className="headerbutton-container">
                    <Button variant="primary"> Scroll Down</Button>
                </div>
            </Jumbotron>
        )
    }
}
export default Header;