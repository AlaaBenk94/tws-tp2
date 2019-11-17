import React from "react";
import {Col} from "react-bootstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
        index: state.index,
        slides: state.slides
    }
}

class Image extends React.Component {

    render() {
        return  (
            <Col xs={6}>
                <img src={this.props.slides[this.props.index-1].image}/>
            </Col>

        );
    }

}

export const ImageConnected = withRouter(connect(mapStateToProps, null)(Image));
