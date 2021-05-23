import React, { Component } from "react";
import "./PaymentDetails.css";
import { Form } from 'react-bootstrap';
import AddCard from '../AddCard/AddCard';


class PaymentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <React.Fragment >
                {/* <button className="add-card-btn">
                    <i className="fa fa-plus mr-3 fa-lg"></i>
                Add Payment Method
            </button> */}
                <AddCard />
            </React.Fragment>

        );
    }
}

export default PaymentDetails;
