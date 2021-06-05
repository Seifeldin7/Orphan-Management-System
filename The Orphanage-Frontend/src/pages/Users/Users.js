import React, { Component } from "react";
import "./Users.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { Col, Container, Row } from "react-bootstrap";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";

class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
    };
  }
  componentDidMount() {
    this.props.onShowOrganizations();
  }
  render() {
    return (
      <Container fluid>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
