import { message, Tabs, List, Card, Image, Carousel } from "antd";
import { LeftCircleFilled, RightCircleFilled } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import React from "react";
import { getStaysByHost } from "../utils";
import UploadStay from "./UploadStay";


const { TabPane } = Tabs;


export class StayDetailInfoButton extends React.Component {
    render() {
        return <></>;
    }
}


class HostHomePage extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
                <TabPane key="1" tab="My Stays">
                    <div>My Stays Content</div>
                </TabPane>
                <TabPane key="2" tab="Upload Stay">
                    <UploadStay />
                </TabPane>
            </Tabs>
        );
    }
}
export default HostHomePage;


