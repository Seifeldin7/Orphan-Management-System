import React, { Component } from "react";
import foodImage from "../../assets/food.png";
import furnImage from "../../assets/furniture.png";
import clothesImage from "../../assets/clothes.png";
import booksImage from "../../assets/books.png";
import "./DonateItems.css";
import { Form } from 'react-bootstrap';


class DonateItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationItems: [foodImage, clothesImage, furnImage, booksImage],
            clicked: [false, false, false, false]

        };
    }
    render() {
        return (
            <div>
                <div className="container">
                    {this.state.donationItems.map((item, index) => {
                        return (
                            <div className="item" key={index} onClick={() => {
                                let clicked_new = [...this.state.clicked];
                                clicked_new[index] = !clicked_new[index];
                                this.setState({ clicked: clicked_new })
                            }
                            }>
                                <img
                                    src={item}
                                    alt="item"
                                    data-testid="oud-logo-img"
                                    className={(!this.state.clicked[index]) ? "item-image" : "item-image-border"}
                                />
                                <p className="item-name">Food</p>
                            </div>
                        );
                    })}
                </div>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" className="radio-group">
                            <Form.Check inline label="Home Pickup" name="group1" type={type} id={`inline-${type}-1`} className="radio"/>
                            <Form.Check inline label="Drop Yourself" name="group1" type={type} id={`inline-${type}-2`} className="radio"/>
                        </div>
                    ))}
                </Form>
                <button className="donate-btn">
                    Donate
                </button>
            </div >
        );
    }
}

export default DonateItems;
