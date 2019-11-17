import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {isMobile} from "react-device-detect";

import 'bootstrap/dist/css/bootstrap.min.css';
import {SlideShowConnected as SlideShow} from "./components/SlideShow";
import {Provider} from "react-redux";
import store from "./store";
import {socketClient} from "./middleware";
import {ADD_DRAW_POINTS, addDrawPoints, RESET_DRAW_POINTS, resetDrawPoints, SET_SLIDE, setSlide} from "./actions";

export const PRESENT = "present";
export const CONTROLER = "controler";
export const EDIT = "edit";

socketClient.on(SET_SLIDE, (action) => {
    console.log(`socket     set slide : ${action}`);
    if (action.type === SET_SLIDE) {
        store.dispatch(setSlide(action.index, true));
    }
});

socketClient.on(ADD_DRAW_POINTS, (action) => {
    console.log(`socket add draw point : ${action}`);
    if (action.type === ADD_DRAW_POINTS) {
        store.dispatch(addDrawPoints(action.clickX, action.clickY, action.clickDrag, true));
    }
});

socketClient.on(RESET_DRAW_POINTS, (action) => {
    console.log(`socket reset : ${action}`);
    if (action.type === RESET_DRAW_POINTS) {
        store.dispatch(resetDrawPoints(true));
    }
});

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        <Route path={`/${PRESENT}`} component={() => <SlideShow mode={PRESENT}/>}/>
                        <Route path={`/${CONTROLER}`} component={() => isMobile ? <SlideShow mode={CONTROLER}/> :
                            <Redirect to={`/${PRESENT}`}/>}/>
                        <Route path={`/${EDIT}`} component={() => <SlideShow mode={EDIT}/>}/>
                        <Route>
                            <Redirect to={`/${PRESENT}`}/>
                        </Route>
                    </Switch>
                </Router>
            </Provider>
        );
    }

}

ReactDOM.render(<Index/>, document.getElementById('app'));
