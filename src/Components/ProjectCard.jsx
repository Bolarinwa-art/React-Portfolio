import React from "react"
import {Card, Row, Col} from "react-bootstrap";

class ProjectCard extends React.Component {
    render() {
        return(
            <div className="project-Card">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.cardImage} />
                        <Card.Body>
                            <Card.Title>{this.props.title}</Card.Title>
                            <Card.Text>{this.props.bodyText} </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href={this.props.projectLink}>{this.props.linkText}</Card.Link>
                        </Card.Body>
                </Card>
            </div>
        );
    }
}

export default ProjectCard;
