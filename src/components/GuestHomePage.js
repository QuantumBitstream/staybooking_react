import {
    Tabs
} from "antd";

import React from "react";



const { TabPane } = Tabs;

class GuestHomePage extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
                <TabPane key="1" tab="Search Stays">
                    Search Stays Content
                </TabPane>
                <TabPane key="2" tab="My Reservations">
                    My Reservations Content
                </TabPane>
            </Tabs>
        );
    }
}


export default GuestHomePage;
