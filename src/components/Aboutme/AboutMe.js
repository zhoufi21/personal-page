import { Typography, Space } from "antd";
import "./AboutMe.scss";
import { Bubble } from "./Bubble";
const { Title } = Typography;
const AboutMe = ({ bubbleCount }) => {
  function generateBubble() {
    let final = [];
    for (let i = 0; i < bubbleCount; i++) {
      final.push(
        <Bubble
          key={i}
          size={(Math.floor(Math.random() * 13) + 3) * 10}
          left={`${Math.floor(Math.random() * 100) + 1}vw`}
          name={Math.random() > 0.5 ? "float-up-right" : "float-up-left"}
        />
      );
    }
    return final;
  }
  return (
    <Space direction="vertical" className="bubbles">
      <h1 className="text">
        <b>About Me</b>
      </h1>
      <Typography
        className="text"
        style={{
          fontSize: "25px",
          left: "2%",
          top: "-20%",
          margin: "8% 15% 4% 10%",
        }}
        level={3}
      >
        I suppose it is my personal website so it is more informal. I am a
        curious uni student, done lots of things. Make this website for example,
        or learn cardistry, learn braille, 3D modeling... Lots of fun things!
        (Also academic things, but those are attached in my CV)
      </Typography>
      {generateBubble()}
    </Space>
  );
};
export { AboutMe };
