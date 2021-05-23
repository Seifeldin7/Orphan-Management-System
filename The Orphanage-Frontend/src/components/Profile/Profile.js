import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Profile.css";
import { config, isLoggedIn } from "./../../utils/auth";
import { Form } from 'react-bootstrap';
import Input from "../Input/Input";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PaymentDetails from '../PaymentDetails/PaymentDetails';
import LocationDetails from '../LocationDetails/LocationDetails';


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
                <Navbar isLoggedIn={true}
                    data-testid="navbar"
                />
                <Tabs className="tabs-contain">
                    <TabList>
                        <Tab className={tabClass}>Personal Information</Tab>
                        <Tab className={tabClass}>Payment Details</Tab>
                        <Tab className={tabClass}>Location</Tab>
                    </TabList>

                    <TabPanel className="tab-center">
                        <Form className="form-container">
                            <Input type="text" label="Name"/>
                            <Input type="text" label="Email"/>
                            <Input type="text" label="Phone"/>
                            <Input type="text" label="National Id"/>
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
