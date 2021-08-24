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
                        <strong>EMAIL</strong>
                    </Col>
                    <Col className="footer-col-val">
                        <a href="mailto:Rabiubolarinwa@gmail.com">
                            Rabiubolarinwa@gmail.com 
                        </a>
                    </Col>
                </Row>
                <hr />
                <Row className="footer-row">
                    <Col className="footer-col-field">
                        <strong>PHONE</strong>
                    </Col>
                    <Col className="footer-col-val">
                        07402579757
                    </Col>
                </Row>
                <hr />
                <Row className="footer-row">
                    <Col className="footer-col-field">
                        <strong>SOCIAL</strong>
                    </Col>
                    <Col className="footer-col-val">
                        <a className="socialmedia-image" href="https://github.com/Bolarinwa-art">
                            <img className="github-icon" src={githubimage} alt="Github Icon" /> 
                        </a>
                        <a  className="socialmedia-image" href="https://www.linkedin.com/in/bolarinwa-rabiu-3a734b1aa/">
                            <img className="linkedin-icon" src={linkedinimage} alt="Linkedin Icon" /> 
                        </a>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Footer;