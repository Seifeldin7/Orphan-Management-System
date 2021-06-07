import React, { Component } from "react";
import "./DonateItems.css";
import { Form } from "react-bootstrap";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import DatePicker from "react-datepicker";
import Input from "../Input/Input";
import "react-datepicker/dist/react-datepicker.css";

class DonateItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationItems: [],
      deliveryMethod: 0,
      scheduled_date: new Date(),
    };
  }

  async componentDidMount() {
    await this.props.onFetchItems();
    let items = this.props.items;
    for (let i = 0; i < items.length; i++) {
      items[i]["selected"] = false;
    }
    this.setState({ donationItems: items });
  }

  selectDeliveryMethod = (method) => {
    this.setState({ deliveryMethod: method });
  };

  getSelectedItems = () => {
    let selectedItems = [];
    for (let item of this.state.donationItems) {
      if (item.selected) {
        selectedItems.push({
          id: item.id,
          amount: item.amount,
        });
      }
    }
    return selectedItems;
  };

  onDonate = () => {
    let body = {
      scheduled_date: this.state.scheduled_date.toString(),
      items: JSON.stringify(this.getSelectedItems()),
      delivery_method: this.state.deliveryMethod,
      org_id: 1,
    };
     this.props.onDonateItems(body);
  };

  amountInputHandler = (event, itemNo) => {
    let donationItems_new = [...this.state.donationItems];
    donationItems_new[itemNo].amount = event.target.value;
    this.setState({ donationItems: donationItems_new });
  };

  render() {
    return (
      <div style={{ marginBottom: 100 }}>
        <div className="container">
          {this.state.donationItems.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img
                  onClick={() => {
                    let donationItems_new = [...this.state.donationItems];
                    donationItems_new[index].selected =
                      !donationItems_new[index].selected;
                    this.setState({ donationItems: donationItems_new });
                  }}
                  src={item.image}
                  alt="item"
                  data-testid="oud-logo-img"
                  className={
                    !this.state.donationItems[index].selected
                      ? "item-image"
                      : "item-image-border"
                  }
                />
                <p className="item-name">{item.name}</p>
                {this.state.donationItems[index].selected ? (
                  <div className="amount-con">
                    <p>Amount:</p>
                    <Input
                      type="number"
                      min={0}
                      onChange={(event) =>
                        this.amountInputHandler(event, index)
                      }
                    />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
        <Form>
          {["radio"].map((type) => (
            <div
              key={`inline-${type}`}
              className="mb-3"
              className="radio-group"
            >
              <Form.Check
                inline
                label="Home Pickup"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
                className="radio"
                onChange={(event) => {
                  this.selectDeliveryMethod(0);
                }}
              />
              <Form.Check
                inline
                label="Drop Yourself"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
                className="radio"
                onChange={(event) => {
                  this.selectDeliveryMethod(1);
                }}
              />
            </div>
          ))}
        </Form>
        <div className="calender-con">
          <DatePicker
            selected={this.state.scheduled_date}
            onChange={(date) =>
              this.setState({ scheduled_date: date})
            }
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDonateItems: (body) => dispatch(actions.donateItem(body)),
    onFetchItems: () => dispatch(actions.fetchItems()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateItems);
