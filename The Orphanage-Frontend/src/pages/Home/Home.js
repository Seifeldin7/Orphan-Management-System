import React, { Component } from "react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { base } from "./../../config/environment";
import axios from "axios";
import { config, isLoggedIn } from "./../../utils/auth";
import Card from "../../components/Card/Card";
import Modal from "../../components/Modal/Modal";
import { Col, Container, Row } from "react-bootstrap";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import DonateMoney from "../../components/DonateMoney/DonateMoney";

class Home extends Component {
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
        <Row>
          <Col md={2} xs={0}>
            <Sidebar data-testid="sidebar" />
          </Col>
          <Col md={{ span: 8, offset: 1 }} xs={12} className="home-margin">
            {this.props.organizations.map((organization, index) => {
              return (
                <Card
                  data={organization}
                  onClickDonate={() => {
                    this.setState({ openModal: true });
                  }}
                  key={index}
                />
              );
            })}
          </Col>
        </Row>

        <div className="modal-container">
          <Modal
            openModal={this.state.openModal}
            closeModal={() => this.setState({ openModal: false })}
          >
           <DonateMoney showOrganizationInput={false}/>
          </Modal>
        </div>
      </Container>
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
    onShowOrganizations: () => dispatch(actions.showOrganizations()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
