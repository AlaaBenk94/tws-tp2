import React from "react";
import {Titre} from "../Titre";
import {Text} from "./Text";
import {Image} from "./Image";

export class Content extends React.Component {

    render() {
        return  (
            <div className="col-12">
                <div className="row">
                    <Text className="col-6" />
                    <Image className="col-6" />
                </div>
            </div>
        );
    }

}
