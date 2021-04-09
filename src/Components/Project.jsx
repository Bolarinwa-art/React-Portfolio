import React from "react"
import {Card, Row, Col} from "react-bootstrap";

class Project extends React.Component {
    render() {
        return (
            <div className="project-container">
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                            
                            </Card.Body>
                        </Card>

            
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                            
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>


            </div>
        

        )
    }
}

export default Project;