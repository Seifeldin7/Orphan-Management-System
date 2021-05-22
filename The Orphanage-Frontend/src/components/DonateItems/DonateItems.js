import React, { Component } from "react";
import foodImage from "../../assets/food.png";
import furnImage from "../../assets/furniture.png";
import clothesImage from "../../assets/clothes.png";
import booksImage from "../../assets/books.png";
import "./DonateItems.css";

class DonateItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationItems: [foodImage, clothesImage, furnImage, booksImage]
        };
    }
    render() {
        return (
            <div className="container">
                { this.state.donationItems.map((item) => {
                    return (
                        <div className="item">
                            <img
                                src={item}
                                alt="item"
                                data-testid="oud-logo-img"
                                className="item-image"
                            />
                            <p className="item-name">Food</p>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default DonateItems;
