import React, { Component } from "react";
import foodImage from "../../assets/food.png";
import furnImage from "../../assets/furniture.png";
import clothesImage from "../../assets/clothes.png";
import booksImage from "../../assets/books.png";
import "./DonateItems.css";
import { Form } from 'react-bootstrap';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DonateItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            donationItems: [
                {
                    icon: foodImage,
                    name: "Food",
                    selected: false
                },
                {
                    icon: clothesImage,
                    name: "Clothes",
                    selected: false
                },
                {
                    icon: furnImage,
                    name: "Furniture",
                    selected: false
                },
                {
                    icon: booksImage,
                    name: "Books",
                    selected: false
                }
            ],
            deliveryMethod: 0,
            scheduled_date: new Date()
        };
    }

    selectDeliveryMethod = (method) => {
        this.setState({ deliveryMethod: method });
    }

    getSelectedItems = () => {
        let selectedItems = '';
        for (let item of this.state.donationItems) {
            if (item.selected) {
                selectedItems += item.name + ',';
            }
        }
        return selectedItems;
    }

    onDonate = () => {
        let body = {
            scheduled_date: this.state.scheduled_date,
            type: this.getSelectedItems(),
            delivery_method: this.state.deliveryMethod
        }
        this.props.onDonateItems(body);
    }

    render() {
        return (
            <div>
                <div className="container">
                    {this.state.donationItems.map((item, index) => {
                        return (
                            <div className="item" key={index} onClick={() => {
                                let donationItems_new = [...this.state.donationItems];
                                donationItems_new[index].selected = !donationItems_new[index].selected;
                                this.setState({ donationItems: donationItems_new })
                            }
                            }>
                                <img
                                    src={item.icon}
                                    alt="item"
                                    data-testid="oud-logo-img"
                                    className={(!this.state.donationItems[index].selected) ?
                                        "item-image" : "item-image-border"}
                                />
                                <p className="item-name">Food</p>
                            </div>
                        );
                    })}
                </div>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3" className="radio-group">
                            <Form.Check
                                inline label="Home Pickup" name="group1" type={type} id={`inline-${type}-1`} className="radio"
                                onChange={(event) => { this.selectDeliveryMethod(0) }}
                            />
                            <Form.Check
                                inline label="Drop Yourself" name="group1" type={type} id={`inline-${type}-2`} className="radio"
                                onChange={(event) => { this.selectDeliveryMethod(1) }}
                            />
                        </div>
                    ))}
                </Form>
                    <div className="calender-con">
                        <DatePicker
                            selected={this.state.scheduled_date}
                            onChange={(date) => this.setState({ scheduled_date: date })}
                            showTimeSelect
                            dateFormat="Pp"
                            className="calender"
                            popperClassName="popper"
                        />
                        <i className="fa fa-calendar mr-3 fa-lg sidebar-icons"></i>
                    </div>                    
                <button className="donate-btn" onClick={this.onDonate}>
                    Donate
                </button>
            </div >
        );
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDonateItems: (body) => dispatch(actions.donateItem(body))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateItems);