import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <button
        type="button"
        className="generic-btn"
        style={this.props.style}
        onClick={() => this.props.onClick()}
      >
        {this.props.title}
      </button>
    );
  }
}

export default Button;
