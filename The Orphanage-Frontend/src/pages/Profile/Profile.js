import React, { Component } from "react";
import "./Profile.css";
import { config, isLoggedIn } from "./../../utils/auth";
import { Form } from 'react-bootstrap';
import Input from "../../components/Input/Input";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PaymentDetails from '../../components/PaymentDetails/PaymentDetails';
import LocationDetails from '../../components/LocationDetails/LocationDetails';
import Sidebar from "../../components/Sidebar/Sidebar";


class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    let tabClass = ["react-tabs__tab", "tabs2"].join(' ');
    return (
      <div>
        <Sidebar
          data-testid="sidebar"
        />
        <Tabs className="tabs-contain">
          <TabList>
            <Tab className={tabClass}>Personal Information</Tab>
            <Tab className={tabClass}>Payment Details</Tab>
            <Tab className={tabClass}>Location</Tab>
          </TabList>

          <TabPanel className="tab-center">
            <Form className="form-container">
              <Input type="text" label="Name" />
              <Input type="text" label="Email" />
              <Input type="text" label="Phone" />
              <Input type="text" label="National Id" />
            </Form>
          </TabPanel>
          <TabPanel className="tab-center">
            <PaymentDetails />
          </TabPanel>
          <TabPanel>
            <LocationDetails />
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

export default Profile;
