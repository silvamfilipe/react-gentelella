import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.css'

class Gentelella extends Component {
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
