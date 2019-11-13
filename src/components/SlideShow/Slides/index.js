import React from 'react';
import {ToolBar} from "./Toolbar";
import Container from "react-bootstrap/Container";
import {Slide} from "./Slide";
import {Redirect} from "react-router-dom";


const SLIDES = [
    {type: 'title', title: 'TIW 8', visible: true, notes: ""},
    {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché"},
    {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: ""},
    {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, notes: ""},
    {type: 'content', title: 'TP 4', text: "Le TP 4", visible: true, notes: ""},
    {type: 'title', title: 'Question ?', visible: true, notes: ""},
];

export class Slides extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            slidesCount: SLIDES.length,
            notes: true
        }
    }

    render() {
        let num = parseInt(this.props.match.params.num);
        // num = num >= SLIDES.length ? SLIDES.length : (num <= 1 ? 1 : num);
        return  (
            <Container className="h-100">
                {   num > SLIDES.length ?
                        <Redirect exact to={{pathname:"/"+SLIDES.length}} /> :
                        ( num < 1 ?
                                <Redirect exact to={{pathname:"/1"}} /> :
                                <Slide state={this.state} param={SLIDES[num - 1]}/> )
                }
                <ToolBar state={this.state} current={parseInt(num)}/>
            </Container>
        );
    }

}
