import React from "react";
import {addDrawPoints, addSlide, removeSlide, resetDrawPoints} from "../../../../actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";
import {resetGesture} from "../../../../canvasManager";
import {Col} from "react-bootstrap";

const mapDispatchToProps = dispatch => {
    return {
        addSlide: (slide, position) => dispatch(addSlide(slide, position)),
        removeSlide: (position) => dispatch(removeSlide(position)),
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
                <Col xs={2}>
                    <Row className="justify-content-start controls">
                        <button onClick={() => {this.props.resetPoints(); resetGesture()}}
                           className="btn btn-dark text-white"><i className="material-icons">autorenew</i></button>
                    </Row>
                </Col>
                <Col xs={8}>
                    <Row className="justify-content-center controls">
                        <button onClick={() => this.props.addSlide(mySlide, this.props.index)}
                           className="btn btn-dark text-white"><i className="material-icons">note_add</i></button>
                        <button onClick={() => {}}
                           className="btn btn-dark text-white"><i className="material-icons">edit</i></button>
                        <button onClick={() => {this.props.removeSlide(this.props.index-1)}}
                           className="btn btn-dark text-white"><i className="material-icons">delete_forever</i></button>
                    </Row>
                </Col>
                <Col xs={2} >
                    <Row className="justify-content-end controls">
                        <a href={`/#/${this.props.mode}/${this.props.index - 1}`}
                           className="btn btn-dark text-white"><i className="material-icons">skip_previous</i></a>
                        <div className="bg-dark text-white text-center flex-column justify-content-center align-items-center">{this.props.index}/{this.props.slides.length}</div>
                        <a href={`/#/${this.props.mode}/${this.props.index + 1}`}
                           className="btn btn-dark text-white"><i className="material-icons">skip_next</i></a>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export const ToolBarConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
