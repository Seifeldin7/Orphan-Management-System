import React, { Component } from "react";
import CashCard from "../CashCard/CashCard";
import "./DonateMoney.css";

class DonateMoney extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationAmounts: [10, 30, 50, 100, 500, 1000]
        };
    }

    renderDonationAmounts = () => {
        return this.state.donationAmounts.map((amount, index) => {
            return <CashCard amount={amount} key={index} />;
        })
    }

    render() {
        return (
            <div className="donate">
                <div className="amounts">
                    {this.renderDonationAmounts()}
                </div>
                <div class="input-group mb-3" id="amount">
                    <span class="input-group-text" id="basic-addon1">LE</span>
                    <input type="number" class="form-control"
                        placeholder="Other Amount" aria-label="amount" aria-describedby="basic-addon1" min="5" max="10000">

                    </input>
                </div>
                <button className="donate-btn">
                    Donate
                </button>
            </div>
        );
    }
}

export default DonateMoney;
