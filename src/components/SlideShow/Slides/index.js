import React from 'react';
import {ToolBar} from "./Toolbar";
import Container from "react-bootstrap/Container";
import {Slide} from "./Slide";
import {Redirect, withRouter} from "react-router-dom";

const SLIDES = [
    {type: 'title', title: 'TIW 8', visible: true, notes: "note 1"},
    {type: 'content', title: 'TP 1', text: "Le TP porte sur des rappels de developpement Web", visible: false, notes: "ce transparent est caché"},
    {type: 'content', title: 'TP 2', text: "Le TP porte sur la creation d'un outil de presentation HTML", visible: true, notes: ""},
    {type: 'content', title: 'TP 3', text: "Le TP 3", visible: true, notes: "note 4"},
    {type: 'content', title: 'TP 4', text: "Le TP 4", visible: true, notes: "note 5"},
    {type: 'title', title: 'Question ?', visible: true, notes: "note 6"},
]

export class Slides extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 1,
            slides: SLIDES,
        }
        this.byState = false;
        this.changeSlide = this.changeSlide.bind(this);
    }

    changeSlide( newIndex ) {
        newIndex = (newIndex > this.state.slides.length) ? this.state.slides.length : newIndex;
        newIndex = (newIndex < 1) ? 1 : newIndex;
        if(this.state.index !== newIndex) {
            this.props.history.push(`/${newIndex}`);
            this.setState({index: newIndex});
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let newIndex = parseInt(this.props.match.params.num);
        if(newIndex !== this.state.index)
            this.setState({index: newIndex});
    }

    render() {
        return  (
            <Container className="h-100">
                <Slide slide={this.state.slides[this.state.index - 1]} />
               <ToolBar state={this.state} action={this.changeSlide}/>
            </Container>
        );
    }
}
