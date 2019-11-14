import React from "react";
import {Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    console.log(`Slides class with state ${JSON.stringify(state)}`)
    return {
        index: state.index,
        slide: state.slides[state.index - 1]
    }
}

class Slide extends React.Component {

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

export const SlideConnected = connect(mapStateToProps, null)(Slide);
