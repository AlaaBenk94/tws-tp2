import React from 'react';
import {ToolBarConnected as ToolBar} from "./Toolbar";
import Container from "react-bootstrap/Container";
import {SlideConnected as Slide} from "./Slide";
import {connect} from "react-redux";
import {setSlide} from "../../../actions";
import {CONTROLER, EDIT, PRESENT} from "../../../index";


const mapStateToProps = (state, ownProps) => {
    return {
        mode: state.mode,
        index: state.index,
        slides: state.slides
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setSlide: (index) => dispatch(setSlide(index))
    }
}

function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(e => console.log(e));
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen().catch(e => console.log(e));
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen().catch(e => console.log(e));
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen().catch(e => console.log(e));
    }
}

export class Slides extends React.Component {

    constructor(props) {
        super(props);
        this.SlideRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        let prevPathIndex = parseInt(prevProps.match.params.num),
            actualPathIndex = parseInt(this.props.match.params.num),
            prevStoreIndex = prevProps.index,
            actualStoreIndex = this.props.index;

        if (prevPathIndex === actualPathIndex
            && prevStoreIndex !== actualStoreIndex
            && actualPathIndex !== actualStoreIndex)
            this.props.history.push(`/${this.props.mode}/${actualStoreIndex}`);

        if (prevPathIndex !== actualPathIndex
            && prevStoreIndex === actualStoreIndex)
            this.props.setSlide(actualPathIndex);

    }

    render() {
        return (
            <Container ref={this.SlideRef} fluid={true} className="h-100">
                <Slide className={"justify-content-center align-items-center h-100 bg-light text-dark"}/>
                {this.props.mode === CONTROLER || this.props.mode === EDIT ? <ToolBar/> : ''}
            </Container>
        );
    }
}

export const SlidesConnected = connect(mapStateToProps, mapDispatchToProps)(Slides);
