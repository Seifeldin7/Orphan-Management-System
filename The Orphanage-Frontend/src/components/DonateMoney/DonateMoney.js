import React, { Component } from "react";
import CashCard from "../CashCard/CashCard";
import "./DonateMoney.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { Container } from "@material-ui/core";
import { Row } from "react-bootstrap";

class DonateMoney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donationAmounts: [10, 30, 50, 100, 500, 1000],
      amountToDonate: 0,
      selectedOrganization: 0,
    };
  }

  renderDonationAmounts = () => {
    return this.state.donationAmounts.map((amount, index) => {
      return (
        <div
          onClick={() => {
            this.setState({ amountToDonate: amount });
            this.onDonate();
          }}
        >
          <CashCard amount={amount} key={index} />;
        </div>
      );
    });
  };

  onChangeAmount = (event) => {
    this.setState({ amountToDonate: event.target.value });
  };

  onDonate = () => {
    let body = {
      card_id: 1,
      amount: this.state.amountToDonate,
      org_id: this.state.selectedOrganization,
    };
    this.props.onDonateMoney(body);
  };

  render() {
    return (
      <div className="donate">
        <div className="amounts">{this.renderDonationAmounts()}</div>
        <div className="input-group mb-3 " id="amount">
          <span className="input-group-text" id="basic-addon1">
            LE
          </span>
          <input
            type="number"
            className="form-control block"
            onChange={(event) => this.onChangeAmount(event)}
            placeholder="Other Amount"
            aria-label="amount"
            aria-describedby="basic-addon1"
            min="5"
            max="10000"
          ></input>
        </div>
        <Container fluid>
          <Row>
            <label for="organizations">Choose an Organization:</label>
            <select
              className="form-control ml-2"
              name="organizations"
              id="organizations"
              onChange={(e) =>
                this.setState({ selectedOrganization: e.target.value })
              }
            >
              {this.props.organizations.map((org) => {
                return (
                  <option key={org.id} value={org.id}>
                    {org.name}
                  </option>
                );
              })}
            </select>
          </Row>
        </Container>
        <button className="donate-btn" onClick={() => this.onDonate()}>
          Donate
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    organizations: state.organizations.organizations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDonateMoney: (body) => dispatch(actions.donateMoney(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateMoney);
