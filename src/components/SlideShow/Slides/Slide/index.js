import React from "react";
import {Content} from "./Content";
import {Titre} from "./Titre";
import Row from "react-bootstrap/Row";
import {connect} from "react-redux";
import {
    clickDrag,
    clickX,
    clickY,
    pointerDownHandler,
    pointerMoveHandler,
    pointerUpEvent,
    setPoints
} from "../../../../canvasManager";
import {EDIT} from "../../../../index";
import {addDrawPoints} from "../../../../actions";


const mapStateToProps = (state, _ownProps) => {
    return {
        mode: state.mode,
        index: state.index,
        slide: state.slides[state.index - 1],
        drawing: state.drawing
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPoints: (x, y, drag) => dispatch(addDrawPoints(x, y, drag)),
    }
}

function toggleFullScreen(elem) {
    if ((document.fullscreenElement !== undefined && document.fullScreenElement === null)
        || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null)
        || (document.mozFullScreen !== undefined && !document.mozFullScreen)
        || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
        if (elem.requestFullScreen) {
            elem.requestFullScreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullScreen) {
            elem.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}


class Slide extends React.Component {

    constructor(props) {
        super(props);
        this.refCanvas = React.createRef();
        this.slideView = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setPoints(this.props.drawing, this.refCanvas.current);
    }

    render() {
        return (
            <Row ref={this.slideView} className={`justify-content-center align-items-center h-100 bg-light text-dark`}>
                <div id="fullscreen" className="btn btn-danger"
                    onClick={() => toggleFullScreen(this.slideView.current)} >{'[ ]'}</div>
                <Titre title={this.props.slide.title}/>
                {this.props.slide.type === "title" ? '' : <Content/>}
                <canvas className={`stroke h-100`}
                            ref={this.refCanvas}
                            onPointerDown={pointerDownHandler}
                            onPointerMove={pointerMoveHandler}
                            onPointerUp={(ev) => {
                                pointerUpEvent(ev);
                                this.props.addPoints(clickX, clickY, clickDrag);
                            }}/>
            </Row>);
    }
}

export const SlideConnected = connect(mapStateToProps, mapDispatchToProps)(Slide);
