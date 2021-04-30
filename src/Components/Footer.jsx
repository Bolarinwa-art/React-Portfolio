import React from "react";
import {Row, Col} from "react-bootstrap";
 
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
                <Row className="footer-row">
                    <Col className="footer-col-field">
                        PHONE 
                    </Col>
                    <Col className="footer-col-val">
                        07402579757
                    </Col>
                </Row>
                <Row className="footer-row">
                    <Col className="footer-col-field">
                        SOCIAL
                    </Col>
                    <Col className="footer-col-val">
                        #
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Footer;