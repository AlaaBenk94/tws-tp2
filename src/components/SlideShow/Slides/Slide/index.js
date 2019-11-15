import React from "react";
import {Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";

const mapStateToProps = (state, ownProps) => {
    return {
        index: state.index,
        slide: state.slides[state.index - 1]
    }
}

class Slide extends React.Component {
    render() {
            return (
                <Row className={this.props.className} >
                    <Titre title={this.props.slide.title} />
                    {this.props.slide.type === "title" ? '' : <Content />}
                </Row>);
    }
}

export const SlideConnected = connect(mapStateToProps, null)(Slide);
