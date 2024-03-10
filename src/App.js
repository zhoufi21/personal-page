import React, { useEffect, useState } from "react";
import "./App.css";
import { Menu, Layout, Space } from "antd";
import Icon from "@ant-design/icons";
import { HomePage } from "./components/HomePage";
import { AboutMe } from "./components/Aboutme/AboutMe";
import { Project } from "./components/Projects/Project";
import { SecretPage } from "./components/SecretPage";
import * as Scroll from "react-scroll";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";

function App() {
    
    const { SubMenu } = Menu;
    let scroll = Scroll.animateScroll;
    const { Header, Footer, Content } = Layout;
    const [hover, setHover] = useState(false);
    const [count, setCount] = useState(0);
    const [hoverStyle, setHoverStyle] = useState({ backgroundColor: "blue" });
    function addCount() {
        setCount(count + 1);
        console.log(count);
    }
    useEffect(() => {
        if (hover) {
            setHoverStyle({
                transform: "translateY(-4em)",
                transition: "transform 0.6s",
            });
        } else {
            setHoverStyle({
                transform: "translateY(0em)",
                transition: "transform 0.4s",
            });
        }
    }, [hover]);
    return (
        <Layout style={{ backgroundColor: "#11111" }}>
            <Header
                onMouseEnter={() => {
                    setHover(false);
                }}
                onMouseLeave={() => {
                    setHover(true);
                }}
                id="hidden"
            >
                <Space size={"middle"} id="menu" style={hoverStyle}>
                    <Icon
                        component={() => (
                            <img width={30} height={30} src="./icon.png" alt="Icon pic" />
                        )}
                        style={{
                            marginTop: "-20px",
                            position: "absolute",
                            marginLeft: "3vw",
                        }}
                        onClick={() => {
                            scroll.scrollToTop();
                            addCount();
                        }}
                    />
                    <div style={{ marginLeft: "70px" }} className="button">
                        <Link to="about" spy={false} smooth={true} className="button">
                            About Me
                        </Link>
                    </div>
                    <div className="button">Some other</div>
                </Space>
            </Header>
            <Content style={{ backgroundColor: "#443b1b" }}>
                <HomePage />
                <AboutMe bubbleCount={60} />
                <Project rippleCount={10} />
                {count >= 10 && <SecretPage />}
            </Content>
            <Footer style={{ textAlign: "center", marginTop: "-1.15em" }}>
                <h6>
                    This website has been made completely independently as a personal
                    project by Filippo Zhou.2022©
                </h6>
            </Footer>
        </Layout>
    );
}

export default App;
