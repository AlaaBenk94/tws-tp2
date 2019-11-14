import React, {Fragment} from "react";
import {addSlide, nextSlide, prevSlide} from "../../../../actions";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => {
    return {
        nextSlide: () => dispatch(nextSlide(true)),
        prevSlide: () => dispatch(prevSlide(true)),
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
        let mySlide = {type: 'content', title: 'Insert Title here', text: "Add Text here", visible: true, notes: "Add some notes"};
        console.log(JSON.stringify(this.props.slides));
        return  (
            <Fragment>
                <p>You are in page {this.props.index} from {this.props.slides.length} </p>
                <a onClick={() => this.props.prevSlide()} className="btn btn-primary text-white">Prev</a>
                <a onClick={() => this.props.nextSlide()} className="btn btn-primary text-white">Next</a>
                <a onClick={() => this.props.addSlide(mySlide, this.props.index)} className="btn btn-primary text-white">Ajouter un slide</a>
            </Fragment>
        );
    }
}

export const ToolBarConnected = withRouter(connect(mapStateToProps, mapDispatchToProps)(ToolBar));
