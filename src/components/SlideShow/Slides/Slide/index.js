import React from "react";
import {Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";

export class Slide extends React.Component {

    render() {
        if(this.props.slide.type === "title")
            return (
                <Row className="justify-content-center align-items-center h-75 bg-primary text-white" >
                    <Titre title={this.props.slide.title} />
                </Row>)
        else
            return  (
                <Row className="justify-content-center align-items-center h-75 bg-primary text-white">
                    <Titre title={this.props.slide.title} />
                    <Content />
                </Row>
            );
    }
}
