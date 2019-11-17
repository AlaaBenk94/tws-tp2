import React from "react";
import Col from "react-bootstrap/Col";
import {Row} from "react-bootstrap";

export class Titre extends React.Component {

    render() {
        return  (
                <Col className="text-center" xs={12}>
                    <h2>{this.props.title}</h2>
                </Col>
        );
    }
}
