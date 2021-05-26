import React, { Component } from "react";
import "./Donate.css";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import DonateMoney from "../../components/DonateMoney/DonateMoney";
import DonateItems from "../../components/DonateItems/DonateItems";
import Sidebar from "../../components/Sidebar/Sidebar";


class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <React.Fragment>
        <Sidebar
          data-testid="sidebar"
        />
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
              <DonateItems />
            </TabPanel>
          </Tabs>
        </div>
      </React.Fragment>

    );
  }
}

export default Donate;
