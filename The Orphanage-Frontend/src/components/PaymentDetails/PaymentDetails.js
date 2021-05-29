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
                <AddCard />
            </React.Fragment>

        );
    }
}

export default PaymentDetails;
