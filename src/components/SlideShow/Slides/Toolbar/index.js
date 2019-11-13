import React from "react";
import {Link} from "react-router-dom";
import {DropdownButton, DropdownItem} from "react-bootstrap";
import {forEach} from "react-bootstrap/cjs/utils/ElementChildren";

export class ToolBar extends React.Component {

    render() {
        console.log(this.props.current);
        let next = "/" + (this.props.current + 1);
        let prev = "/" + (this.props.current - 1);
        let items = [];
        for(let i=1; i<=this.props.state.slidesCount; i++)
            items.push(<DropdownItem key={i} href={"#/"+i}>{i}</DropdownItem>);

        return  (
            <div>
                <p>You are in page {this.props.current} from {this.props.state.slidesCount} </p>
                <Link className="btn btn-primary" to={prev}>Prev</Link>
                <Link className="btn btn-primary" to={next}>Next</Link>
                <DropdownButton id="pages" title={this.props.current}>
                    {items}
                </DropdownButton>
            </div>
        );
    }

}
