import React, { Component } from "react";
import "./AddCard.css";
import { Container, Form, Row, Col } from 'react-bootstrap';

import Input from "../Input/Input";


class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <Form className="card-container">
                            <Input type="text" label="Credit Card Number" placeholder="xxxx xxxx xxxx xxxx" />
                            <Input type="text" label="Phone" placeholder="Phone Number" />
                            <Input type="text" label="National Id" placeholder="National ID" />
                        </Form>
                    </Col>

                </Row>
                <Row>
                    <Col>
                        <button className="add-card-btn">
                Add Card
            </button>
                        <button className="add-card-btn">
                Cancel
            </button>
                    </Col>

                </Row>

            </Container>

        );
    }
}

export default AddCard;
