import React from "react";
import { Form, List, message, Tabs } from "antd";
import { searchStays } from "../utils";


const { TabPane } = Tabs;


class SearchStays extends React.Component {
    state = {
        data: [],
        loading: false,
    };


    search = async (query) => {
        this.setState({
            loading: true,
        });


        try {
            const resp = await searchStays(query);
            this.setState({
                data: resp,
            });
        } catch (error) {
            message.error(error.message);
        } finally {
            this.setState({
                loading: false,
            });
        }
    };


    render() {
        return (
            <>
                <Form onFinish={this.search} layout="inline">
                    <Form.Item></Form.Item>
                    <Form.Item></Form.Item>
                    <Form.Item></Form.Item>
                    <Form.Item></Form.Item>
                </Form>
                <List></List>
            </>
        );
    }
}


class GuestHomePage extends React.Component {
    render() {
        return (
            <Tabs defaultActiveKey="1" destroyInactiveTabPane={true}>
                <TabPane key="1" tab="Search Stays">
                    <SearchStays />
                </TabPane>
                <TabPane key="2" tab="My Reservations">
                    My Reservations Content
                </TabPane>
            </Tabs>
        );
    }
}


export default GuestHomePage;


