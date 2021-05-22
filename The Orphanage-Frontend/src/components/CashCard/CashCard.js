import React, { Component } from "react";
import "./CashCard.css"

class CashCard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <button className="cash-card">
                {this.props.amount} LE
            </button>
        );
    }
}

export default CashCard;
