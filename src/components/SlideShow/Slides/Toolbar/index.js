import React from "react";
import {addDrawPoints, addSlide, resetDrawPoints, setSlide} from "../../../../actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";

const mapDispatchToProps = dispatch => {
    return {
        addSlide: (slide, position) => dispatch(addSlide(slide, position)),
        addPoints: (x, y, drag) => dispatch(addDrawPoints(x, y, drag)),
        resetPoints: () => dispatch(resetDrawPoints())
    }
}

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
        index: state.index,
        slides: state.slides
    }
}

class ToolBar extends React.Component {
    render() {
        let mySlide = {
            type: 'content',
            title: 'Insert Title here',
            text: "Insert Text here",
            visible: true,
            notes: "Insert notes here"
        };

        return (
            <Row className="h-25">
                <p>You are in page {this.props.index} from {this.props.slides.length} </p>
                <a href={`/#/${this.props.mode}/${this.props.index - 1}`}
                   className="btn btn-primary text-white">Prev</a>
                <a href={`/#/${this.props.mode}/${this.props.index + 1}`}
                   className="btn btn-primary text-white">Next</a>

                <a onClick={() => this.props.resetPoints()}
                   className="btn btn-primary text-white">Reset</a>
                <a onClick={() => this.props.addSlide(mySlide, this.props.index)}
                   className="btn btn-primary text-white">Ajouter un slide</a>
            </Row>
        );
    }
}

export const ToolBarConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
