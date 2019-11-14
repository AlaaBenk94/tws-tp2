import React, {Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {SlidesConnected as Slides} from "./Slides";

export class SlideShow extends React.Component {
    render() {
        return  (
            <Switch>
                <Route path="/:num" component={Slides}/>
                <Route>
                    <Redirect to="/1"/>
                </Route>
            </Switch>
        );
    }
}
