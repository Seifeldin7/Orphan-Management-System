import React, { Component } from "react";
import "./AddCard.css";
import { Container, Form, Row, Col } from 'react-bootstrap';
import Button from '../Button/Button';
import Input from "../Input/Input";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';



class AddCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cvc: '',
            expiry: '',
            focus: '',
            name: '',
            number: '',
        };
    }
    handleInputFocus = (e) => {
        this.setState({ focus: e.target.name });
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Cards
                            cvc={this.state.cvc}
                            expiry={this.state.expiry}
                            focused={this.state.focus}
                            name={this.state.name}
                            number={this.state.number}
                        />
                    </Col>
                    <Col>
                        <Row>
                            <Col>
                                <Form className="card-container">
                                    <Input
                                        name="number"
                                        type="text"
                                        label="Credit Card Number"
                                        placeholder="xxxx xxxx xxxx xxxx"
                                        onChange={this.handleInputChange}
                                        onFocus={this.handleInputFocus} />
                                    <Row>
                                        <Col>
                                            <Input
                                                name="expiry"
                                                type="text"
                                                label="Expiry"
                                                placeholder="12/24"
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus}
                                            />
                                        </Col>
                                        <Col>
                                            <Input name="cvc"
                                                type="number"
                                                label="CVC"
                                                placeholder="XXX"
                                                min={"100"}
                                                max={"999"}
                                                onChange={this.handleInputChange}
                                                onFocus={this.handleInputFocus} />
                                        </Col>
                                    </Row>
                                </Form>
                            </Col>

                        </Row>
                        <Row>
                            <Col >
                                <Button title="Add Card" style={{ marginRight: 10 }} />
                                <Button title="Cancel" style={{
                                    backgroundColor: 'white',
                                    border: '1px solid green',
                                    color: 'green'
                                }} />
                            </Col>

                        </Row>
                    </Col>
                </Row>



            </Container>

        );
    }
}

export default AddCard;
