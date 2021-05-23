import React, { Component } from "react";
import "./AddCard.css";
import { Container, Form, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
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
                            <Row>
                                <Col>
                                    <Input type="text" label="Expiry" placeholder="12/24" />
                                </Col>
                                <Col>
                                    <Input type="number" label="CVV" placeholder="XXX" min={"100"} max={"999"}/>
                                </Col>
                            </Row>
                        </Form>
                    </Col>

                </Row>
                <Row>
                    <Col sm={{ span: 6, offset: 3 }}>
                        <Button title="Add Card" style={{ marginRight: 10 }} />
                        <Button title="Cancel" style={{
                            backgroundColor: 'red',
                        }} />
                    </Col>

                </Row>

            </Container>

        );
    }
}

export default AddCard;
