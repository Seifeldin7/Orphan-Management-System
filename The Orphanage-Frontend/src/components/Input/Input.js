import React, { Component } from "react";
import "./Input.css";


class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="input-group mb-3 input-display">
                <label for="exampleFormControlInput1" class="form-label">{this.props.label}</label>
                <input
                    name={this.props.name}
                    type={this.props.type}
                    className="form-input"
                    placeholder={this.props.placeholder}
                    min={this.props.min}
                    max={this.props.max}
                    onChange={this.props.onChange}
                    onFocus={this.props.onFocus}>
                </input>
            </div>
        );
    }
}

export default Input;
