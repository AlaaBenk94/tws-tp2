import React, {Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {SlidesConnected as Slides} from "./Slides";
import {connect} from "react-redux";
import {setMode} from "../../actions";

const mapDispatchToProps = dispatch => {
    return {
        setMode: mode => dispatch(setMode(mode))
    }
}

class SlideShow extends React.Component {
    componentDidMount() {
        this.props.setMode(this.props.mode);
    }

    render() {
        return  (
            <Switch>
                <Route exact path={`/${this.props.mode}/:num`} component={Slides}/>
                <Route>
                    <Redirect to={`/${this.props.mode}/1`}/>
                </Route>
            </Switch>
        );
    }
}

export const SlideShowConnected = connect(null, mapDispatchToProps)(SlideShow);
