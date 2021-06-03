import React, { Component } from "react";
import "./Profile.css";
import { config, isLoggedIn } from "./../../utils/auth";
import { Container, Form, Row, Col } from "react-bootstrap";
import Input from "../../components/Input/Input";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PaymentDetails from "../../components/PaymentDetails/PaymentDetails";
import LocationDetails from "../../components/LocationDetails/LocationDetails";
import Sidebar from "../../components/Sidebar/Sidebar";
import Button from "../../components/Button/Button";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
                <Container fluid>
                  <Row>
                    <Col xs={{span: 12, offset: 1}}>
                      <Form className="form-container">
                        <Input type="text" label="Name" />
                        <Input type="text" label="Email" />
                        <Input type="text" label="Phone" />
                        <Input type="text" label="National Id" />
                        <Row>
                            <Col >
                        <Button title="Update" style={{ marginRight: 10 }} />
                        <Button
                          title="Cancel"
                          style={{
                            backgroundColor: "white",
                            border: "1px solid green",
                            color: "green",
                          }}
                        />
                        </Col>
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </Container>
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

export default Profile;
