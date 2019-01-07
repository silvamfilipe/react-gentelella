import React, { Component } from 'react';

class ToggleButtonGroup extends Component {

  render() {
    const { name, label, children } = this.props;
    return (
      <div className="form-group">
        <label htmlFor={name} className="control-label col-md-3 col-sm-3 col-xs-12">{ label }</label>
        <div className="col-md-6 col-sm-6 col-xs-12">
          <div className="btn-group" data-toggle="buttons">
            { children }
          </div>
        </div>
      </div>
    );
  }
}

export default ToggleButtonGroup;
