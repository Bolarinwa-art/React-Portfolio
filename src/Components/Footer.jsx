import React from "react";
import {Row, Col} from "react-bootstrap";
import githubimage from "../Images/github.png";
import linkedinimage from "../Images/linkedin-icon.png";
 
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
                <Row className="footer-row">
                    <Col className="footer-col-field">
                        EMAIL 
                    </Col>
                    <Col className="footer-col-val">
                        Rabiubolarinwa@gmail.com
                    </Col>
                </Row>
                <hl />
                <Row className="footer-row">
                    <Col className="footer-col-field">
                        PHONE 
                    </Col>
                    <Col className="footer-col-val">
                        07402579757
                    </Col>
                </Row>
                <hl />
                <Row className="footer-row">
                    <Col className="footer-col-field">
                        SOCIAL
                    </Col>
                    <Col className="footer-col-val">
                        <a href="https://github.com/Bolarinwa-art">
                            <img className="github-icon" src={githubimage} alt="Github Icon" /> 
                        </a>
                        <a href="https://www.linkedin.com/in/bolarinwa-rabiu-3a734b1aa/">
                            <img className="linkedin-icon" src={linkedinimage} alt="Linkedin Icon" /> 
                        </a>
                    </Col>
                </Row>
                <Row>
                <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                </Row>
            </div>
        );
    }
}
export default Footer;