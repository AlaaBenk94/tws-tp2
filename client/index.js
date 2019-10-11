import React from 'react';
import ReactDOM from 'react-dom';
import {SlideShow} from "./components";

class Index extends React.Component {

    render() {
        return  (
          <SlideShow />
        );
    }

}
ReactDOM.render(<Index />, document.getElementById('root'));
