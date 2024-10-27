import { Tabs } from "antd";
import React from "react";


const { TabPane } = Tabs;


class HostHomePage extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
                <TabPane key="1" tab="My Stays">
                    <div>My Stays Content</div>
                </TabPane>
                <TabPane key="2" tab="Upload Stay">
                    <div>Upload Stays</div>
                </TabPane>
            </Tabs>
        );
    }
}


export default HostHomePage;


