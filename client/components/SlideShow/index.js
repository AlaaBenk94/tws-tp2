import React from 'react';
import {Slides} from "./Slides";
import {ToolBar} from "./Toolbar";

export class SlideShow extends React.Component {

    render() {
        return  (
            <div class="container-fluid">
                <Slides />
                <ToolBar />
            </div>
        );
    }

}
