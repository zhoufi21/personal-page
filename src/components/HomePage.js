import { Space, Typography } from "antd";
import "antd/dist/antd.css";
const { Title } = Typography;
const HomePage = () => {
  return (
    <Space direction="vertical" style={{ height: "400px" }}>
      <Title
        level={1}
        style={{
          color: "#001529",
          fontFamily: "Candara",
          fontSize: 60,
          marginRight: "150px",
          marginLeft: "50px",
          marginTop: "60px",
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
          marginTop: "-30px",
          marginLeft: "120px",
        }}
      >
        2022
      </Title>
    </Space>
  );
};
export { HomePage };
