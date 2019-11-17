import React from "react";
import {Text} from "./Text";
import {ImageConnected as Image} from "./Image";
import {Row} from "react-bootstrap";

export class Content extends React.Component {

    render() {
        return  (
                <Row className="p-4">
                    <Text />
                    <Image />
                </Row>
        );
    }

}
