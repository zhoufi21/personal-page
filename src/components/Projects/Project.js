import { Space} from "antd";
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
        <Circle key={i} left={`${Math.floor(Math.random() * (80+ 1)) + 1}vw`} size={Math.floor(Math.random()*2) + 1} name={`expand${getRnd(1, 3)}`} />
      );
    }
    return final;
  }
  return (
    <Space direction="vertical" className="container">
      {generateRipple()}
    </Space>
  );
};
export { Project };
