import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import {SlideShow} from "./components/SlideShow";

class Index extends React.Component {

    render() {
        return  (
            <Router>
                <Route path="/" component={SlideShow} />
            </Router>
        );
    }

}
ReactDOM.render(<Index />, document.getElementById('app'));
