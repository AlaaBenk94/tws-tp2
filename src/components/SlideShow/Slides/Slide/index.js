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

class Slide extends React.Component {

    constructor(props) {
        super(props);
        this.refCanvas = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        setPoints(this.props.drawing, this.refCanvas.current);
    }

    render() {
        let h = this.props.mode === EDIT ? 'h-75' : 'h-100';
        return (
            <Row className={`justify-content-center align-items-center ${h} bg-light text-dark`}>
                <Titre title={this.props.slide.title}/>
                {this.props.slide.type === "title" ? '' : <Content/>}
                <canvas className={`stroke ${h}`}
                        ref={this.refCanvas}
                        onPointerDown={pointerDownHandler}
                        onPointerMove={pointerMoveHandler}
                        onPointerUp={(ev) => {pointerUpEvent(ev); this.props.addPoints(clickX, clickY, clickDrag)}}/>
            </Row>);
    }
}

export const SlideConnected = connect(mapStateToProps, mapDispatchToProps)(Slide);
