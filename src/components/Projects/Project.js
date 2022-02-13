import { Typography, Space } from "antd";
import "./Project.css";
import { Circle } from "./Circle";
const Project = ({ rippleCount }) => {
  function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function generateRipple() {
    let final = [];
    for (let i = 0; i < rippleCount; i++) {
      final.push(
        <Circle
          key={i}
          left={`${Math.floor(Math.random() * (80 + 1)) + 1}vw`}
          size={Math.floor(Math.random() * 2) + 1}
          name={`expand${getRnd(1, 3)}`}
        />
      );
    }
    return final;
  }
  return (
    <Space direction="vertical" className="container">
      <h1 className="text">
        <b>Current Projects</b>
      </h1>
      <Typography
        className="text"
        style={{
          fontSize: "25px",
          left: "2%",
          top: "-20%",
          margin: "14% 15% 4% 10%",
        }}
        level={3}
      >
        This website and This picture below (its not there yet, but its gonna
        be)
      </Typography>
      {generateRipple()}
    </Space>
  );
};
export { Project };
