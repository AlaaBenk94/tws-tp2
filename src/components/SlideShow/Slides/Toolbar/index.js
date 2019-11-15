import React from "react";
import {addSlide, setSlide} from "../../../../actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Row from "react-bootstrap/Row";

const mapDispatchToProps = dispatch => {
    return {
        setSlide: (index) => dispatch(setSlide(index)),
        addSlide: (slide, position) => dispatch(addSlide(slide, position))
    }
}

const mapStateToProps = (state) => {
    return {
        index: state.index,
        slides: state.slides
    }
}

class ToolBar extends React.Component {
    render() {
        let mySlide = {
            type: 'content',
            title: 'Insert Title here',
            text: "Add Text here",
            visible: true,
            notes: "Add some notes"
        };

        return (
            <Row>
                <p>You are in page {this.props.index} from {this.props.slides.length} </p>
                <a onClick={() => this.props.setSlide(this.props.index - 1)}
                   className="btn btn-primary text-white">Prev</a>
                <a onClick={() => this.props.setSlide(this.props.index + 1)}
                   className="btn btn-primary text-white">Next</a>
                <a onClick={() => this.props.addSlide(mySlide, this.props.index)}
                   className="btn btn-primary text-white">Ajouter un slide</a>
            </Row>
        );
    }
}

export const ToolBarConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
