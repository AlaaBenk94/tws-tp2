import React from "react";
import {Col} from "react-bootstrap";

export class Text extends React.Component {

    render() {
        return  (
            <Col xs={6}>
                <p>This is my text</p>
                <ul>
                    <li>first item</li>
                    <li>seconde item</li>
                    <li>third item</li>
                </ul>
            </Col>

        );
    }

}
