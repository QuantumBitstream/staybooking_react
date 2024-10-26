import { Layout,Dropdown, Menu,Button } from "antd";
import {Useroutlined } from "@ant-design/icons";
import React from "react"

const { Header,Content } = Layout;

class App extends React.Component {
  render() {
    return (
        <Layout style={{ height: "100vh" }}>
          <Header></Header>
          <Content></Content>
        </Layout>
    );
  }
}

export default App;

