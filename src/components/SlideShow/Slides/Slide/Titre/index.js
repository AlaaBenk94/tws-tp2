import React from "react";
import Col from "react-bootstrap/Col";
// import 'bootstrap/dist/css/bootstrap.min.css';

export class Titre extends React.Component {

    render() {
        return  (
            <Col className="text-center" xs={6}>
                <h2>{this.props.title}</h2>
            </Col>
        );
    }
}
