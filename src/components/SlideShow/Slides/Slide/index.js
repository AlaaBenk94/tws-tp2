import React from "react";
import {Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";

export class Slide extends React.Component {

    render() {
        if(this.props.param.type === "title")
            return (
                <Row className="justify-content-center align-items-center h-75 bg-primary text-white" >
                    <Titre title={this.props.param.title} />
                </Row>)
        else
            return  (
                <Row className="justify-content-center align-items-center h-75 bg-primary text-white">
                    <Titre title={this.props.param.title} />
                    <Content />
                </Row>
            );
    }
}
