import React, { Component } from "react";
import "./MainContent.css";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DonateMoney from "../DonateMoney/DonateMoney";


class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="tabs-container">
        <Tabs className="tabs">
          <TabList>
            <Tab>Donate Money</Tab>
            <Tab>Donate Items</Tab>
          </TabList>

          <TabPanel>
            <DonateMoney />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </div>

    );
  }
}

export default MainContent;
