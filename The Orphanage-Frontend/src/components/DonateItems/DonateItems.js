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
            donationItems: [foodImage, clothesImage, furnImage, booksImage],
            clicked: [false, false, false, false]

        };
    }
    render() {
        return (
            <div className="container">
                { this.state.donationItems.map((item, index) => {
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
        );
    }
}

export default DonateItems;
