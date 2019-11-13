import React from 'react';
import Container from "react-bootstrap/Container";
import {Route} from "react-router-dom";
import {Slides} from "./Slides";

export class SlideShow extends React.Component {
    render() {
        return  (
            <Route path="/:num" component={Slides}/>
        );
    }

}
