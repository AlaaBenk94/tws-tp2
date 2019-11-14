import React from 'react';
import {ToolBarConnected as ToolBar} from "./Toolbar";
import Container from "react-bootstrap/Container";
import {SlideConnected as Slide} from "./Slide";
import {connect} from "react-redux";
import {setSlide} from "../../../actions";


const mapStateToProps = (state, ownProps) => {
    return {
        index: state.index,
        slides: state.slides
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSlide: (index) => dispatch(setSlide(index))
    }
}

export class Slides extends React.Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        let prevPathIndex = parseInt(prevProps.match.params.num),
            actualPathIndex = parseInt(this.props.match.params.num),
            prevStoreIndex = prevProps.index,
            actualStoreIndex = this.props.index;

        if(prevPathIndex === actualPathIndex && prevStoreIndex !== actualStoreIndex && actualPathIndex !== actualStoreIndex)
            this.props.history.push(`/${actualStoreIndex}`);

        if(prevPathIndex !== actualPathIndex && prevStoreIndex === actualStoreIndex)
            this.props.setSlide(actualPathIndex);

    }

    render() {
        return  (
            <Container fluid={true} className="h-100">
                <Slide />
                <ToolBar />
            </Container>
        );
    }
}

export const SlidesConnected = connect(mapStateToProps, mapDispatchToProps)(Slides);
