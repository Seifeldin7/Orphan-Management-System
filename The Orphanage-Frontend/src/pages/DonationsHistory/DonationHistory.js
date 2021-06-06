import React, { Component } from "react";
import "./DonationHistory.css";
import { TableUI as Table } from "../../components/Table/Table";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class DonationHistory extends Component {
  componentDidMount() {
    this.props.onShowMoneyDonations();
  }

  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Row>
            <Col xs= {3} md={0}>
              <Sidebar data-testid="sidebar" />
            </Col>

            <Col xs= {12} md={9}>
              <Table
                columns={["name", "type", "age", "amount", ""]}
                data={[
                  {
                    name: "EDU",
                    type: "EDUcation",
                    age: "12",
                    amount: 112,
                  },
                  {
                    name: "EDU2",
                    type: "EDU",
                    age: "12",
                    amount: 112,
                  },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemDonations: state.itemDonations.donations,
    moneyDonations: state.moneyDonations.donations,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onShowMoneyDonations: () => dispatch(actions.showMoneyDonations()),
    onShowItemDonations: () => dispatch(actions.showItemDonations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationHistory);
