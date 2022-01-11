import { Space, Typography } from "antd";
import "antd/dist/antd.css";
const { Title } = Typography;
const HomePage = () => {
  return (
    <Space direction="vertical" className="gradient">
      <Title
        level={1}
        style={{
          color: "#001529",
          fontFamily: "Candara",
          fontSize: 60,
          marginLeft: "20vw",
          marginTop: "30vh",
        }}
      >
        Filippo Zhou
      </Title>
      <Title
        level={3}
        style={{
          color: "#141414",
          fontFamily: "Helvetica",
          fontSize: 20,
          marginTop: "-6vh",
          marginLeft: "25vw",
        }}
      >
        2022
      </Title>
    </Space>
  );
};
export { HomePage };
