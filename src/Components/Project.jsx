import React from "react"
import {Row, Col} from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import rfidCardImage from  "../Images/rfidImage.jpg";
import loginpageCardImage from"../Images/loginpageImage.jpg";
import rfidPDF from "../RFID-Attendance-System-Document.pdf";

class Project extends React.Component {
    render() {
        const rfidTitle="RFID ATTENDANCE SYSTEM PROJECT";
        const rfidBodyText="Maintaining attendance is compulsory and important "+
        "in all the institutions for knowing the performance of students. "+
        "My project allows schools to have their own attendance system that is "+
        "suitable for a school environment.";
        const rfidLinkText="See Documentation"; 
        
        const loginpageTitle="LOGIN PAGE USING HTML, CSS AND JAVASCRIPT";
        const loginpageBodyText="login page is a web page or an entry page to a "+
        "website that requires user identification and authentication, "+
        "regularly performed by entering a username and password combination.";
        const loginpageLinkText="see Code";
        const loginpageProjectLink="https://github.com/Bolarinwa-art/Login-page";
        return (
            <div className="project-container">
                <Row className="project-row">
                    <Col className="project-col">
                        <ProjectCard
                            title={rfidTitle}
                            cardImage={rfidCardImage}
                            bodyText={rfidBodyText}
                            projectLink={rfidPDF}
                            linkText={rfidLinkText}
                        />
                    </Col>
                    <Col className="project-col">
                        <ProjectCard 
                            title={loginpageTitle}
                            cardImage={loginpageCardImage}
                            bodyText={loginpageBodyText}
                            projectLink={loginpageProjectLink}
                            linkText={loginpageLinkText}
                        /> 
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Project;