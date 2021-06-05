import React, { Component } from "react";
import "./Users.css";
import { TableUI as Table } from "../../components/Table/Table";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.onFetchUsers();
  }
  deleteUserById = (id) => {
    this.props.onDeleteUser(id);
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <Col xs={3} md={0}>
            <Sidebar data-testid="sidebar" />
          </Col>

          <Col xs={12} md={9}>
            <Table
              columns={["ID", "Name", "Phone", "National ID", "Email", ""]}
              data={this.props.users}
              deleteElement = {(id) => this.deleteUserById(id)}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers()),
    onDeleteUser: (id) => dispatch(actions.deleteUser(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
