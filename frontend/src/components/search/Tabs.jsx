import React from "react";
import { Tabs } from "antd";
import Search from "./Search";
import "./Tabs.css"

const { TabPane } = Tabs;

const Tabs = () => {
  const onChange = (key) => {
    //console.log(key);
  };

  return (
    <Tabs onChange={onChange} type="card">
      <TabPane tab="Hotel" key="1">
        <Search />
      </TabPane>
      <TabPane tab="Tour" key="2">
        <Search />
      </TabPane>
      <TabPane tab="Activity" key="3">
        <Search />
      </TabPane>
      <TabPane tab="Holiday Rentals" key="4">
        <Search />
      </TabPane>
      <TabPane tab="Car" key="5">
        <Search />
      </TabPane>
      <TabPane tab="Cruise" key="6">
        <Search />
      </TabPane>
      <TabPane tab="Flights" key="7">
        <Search />
      </TabPane>

    </Tabs>
  );
};

export default Tabs;