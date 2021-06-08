import React, { Component } from "react";
import "./Profile.css";
import { Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/Input/Input";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import LocationDetails from "../../components/LocationDetails/LocationDetails";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      national_id: "",
      email: "",
    };
  }

  updateUserInfo = () => {
    this.props.onUpdateUser({
      name: this.state.name,
      phone: this.state.phone,
      national_id: this.state.national_id,
      email: this.state.email,
    });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={2} xs={0}>
            <Sidebar data-testid="sidebar" />
          </Col>
          <Col md={{ span: 8, offset: 1 }} xs={12} className="home-margin">
            <Tabs>
              <TabList>
                <Tab className="tab-profile">Personal Information</Tab>
                <Tab className="tab-profile">Payment Details</Tab>
                <Tab className="tab-profile">Location</Tab>
              </TabList>

              <TabPanel>
                <Col xs={{ span: 12, offset: 1 }}>
                  <Form className="form-container">
                    <Input
                      type="text"
                      label="Name"
                      onChange={(event) =>
                        this.setState({ name: event.target.value })
                      }
                    />
                    <Input
                      type="text"
                      label="Email"
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                    <Input
                      type="text"
                      label="Phone"
                      onChange={(event) =>
                        this.setState({ phone: event.target.value })
                      }
                    />
                    <Input
                      type="text"
                      label="National Id"
                      onChange={(event) =>
                        this.setState({ national_id: event.target.value })
                      }
                    />
                    <Row>
                      <Col>
                        {/* <button
                          type="button"
                          style={{ marginBottom: 100 }}
                          onClick={this.updateUserInfo}
                        >
                          Update
                        </button> */}
                        <Button
                          title="Update"
                          onClick={() => {
                            this.updateUserInfo();
                          }}
                          style={{ marginBottom: 100 }}
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </TabPanel>
              <TabPanel>
                <PaymentDetails />
              </TabPanel>
              <TabPanel>
                <LocationDetails />
              </TabPanel>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (body) => dispatch(actions.updateUser(body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
