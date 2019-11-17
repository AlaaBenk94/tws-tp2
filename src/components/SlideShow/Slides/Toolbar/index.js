import React from "react";
import {addDrawPoints, addSlide, resetDrawPoints, setSlide} from "../../../../actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import {resetGesture} from "../../../../canvasManager";
import {Col} from "react-bootstrap";

const mapDispatchToProps = dispatch => {
    return {
        addSlide: (slide, position) => dispatch(addSlide(slide, position)),
        removeSlide: (slide, position) => dispatch(addSlide(slide, position)),
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
            <Row className="toolbar">
                <Col xs={4}>
                    <Row className="justify-content-start controls">
                        <button onClick={() => {this.props.resetPoints(); resetGesture()}}
                           className="btn btn-dark text-white">Reset</button>
                    </Row>
                </Col>
                <Col xs={4}>
                    <Row className="justify-content-center controls">
                        <button onClick={() => this.props.addSlide(mySlide, this.props.index)}
                           className="btn btn-dark text-white">Add a slide</button>
                        <button onClick={() => {}}
                           className="btn btn-dark text-white">Edit slide</button>
                        <button onClick={() => {}}
                           className="btn btn-dark text-white">Remove slide</button>
                    </Row>
                </Col>
                <Col xs={4} className="justify-content-end controls">
                    <Row className="justify-content-end controls">
                        <a href={`/#/${this.props.mode}/${this.props.index - 1}`}
                           className="btn btn-dark text-white">{'<'}</a>
                        <div className="bg-dark text-white text-center flex-column justify-content-center align-items-center">{this.props.index}/{this.props.slides.length}</div>
                        <a href={`/#/${this.props.mode}/${this.props.index + 1}`}
                           className="btn btn-dark text-white">{'>'}</a>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export const ToolBarConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
