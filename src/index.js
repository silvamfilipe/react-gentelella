import _$ from 'jquery';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'gentelella/build/css/custom.css';

class Gentelella extends React.Component {

    componentWillMount()
    {
        _$('body').addClass('nav-md');
    }

    render() {
        return (
            <div className={"container body"}>
                <div className={"main_container"}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Gentelella;
