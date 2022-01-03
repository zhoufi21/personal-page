import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Menu, Layout, Space } from "antd";
import Icon from "@ant-design/icons";
import { HomePage } from "./components/HomePage";
import {
  AppstoreOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
function App() {
  const { SubMenu } = Menu;

  const { Header, Footer, Content } = Layout;
  const [hover, setHover] = useState(false);
  const [hoverStyle, setHoverStyle] = useState({ backgroundColor: "blue" });
  useEffect(() => {
    if (hover) {
      setHoverStyle({ backgroundColor: "blue" });
    } else {
      setHoverStyle({ backgroundColor: "red" });
    }
  }, [hover]);
  return (
    <Layout style={{ backgroundColor: "#262934" }}>
      <Header>
        <Menu mode="horizontal" theme="dark">
          <Menu.Item
            key="a"
            icon={
              <Icon
                component={() => (
                  <img width={40} height={40} src="./icon.png" alt="Icon pic" />
                )}
                unselectable="true"
              />
            }
          />
          <Menu.Item key="1" onMouseEnter={() => setHover(true)}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Option 3
          </Menu.Item>
          <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Navigation Two"
          >
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </SubMenu>
        </Menu>
      </Header>
      <Content style={{ backgroundColor: "#262934" }}>
        <Space mode="vertical" className="gradient">
          <HomePage />
        </Space>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <h6>
          This website has been made completely independently as a personal
          project
        </h6>
      </Footer>
    </Layout>
  );
}

export default App;
