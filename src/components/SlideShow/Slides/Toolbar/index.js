import React from "react";

export class ToolBar extends React.Component {

    render() {
        return  (
            <div>
                <p>You are in page {this.props.state.index} from {this.props.state.slides.length} </p>
                <a onClick={() => this.props.action(this.props.state.index - 1)} className="btn btn-primary text-white">Prev</a>
                <a onClick={() => this.props.action(this.props.state.index + 1)} className="btn btn-primary text-white">Next</a>
            </div>
        );
    }

}
