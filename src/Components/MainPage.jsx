import React from "react";
import {Nav} from "react-bootstrap";

class MainPage extends React.Component {
    render () {
        return (
        <div className="MainPage"> 
            <Nav variant="tabs">
                <Nav.Item>
                    <Nav.Link>About Me</Nav.Link>
                </Nav.Item>  
            </Nav>
            {this.props.children}
        </div>
        )
    }
}
export default MainPage;