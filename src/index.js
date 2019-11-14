import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Redirect, Route} from "react-router-dom";
import {isMobile} from "react-device-detect";

import 'bootstrap/dist/css/bootstrap.min.css';
import {SlideShowConnected as SlideShow} from "./components/SlideShow";
import {Provider} from "react-redux";
import store from "./store";
import {Switch} from "react-bootstrap";

export const PRESENT = "present";
export const CONTROLER = "controler";
export const EDIT = "edit";

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
