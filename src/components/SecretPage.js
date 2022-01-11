import { Space, Typography } from "antd";
import "./SecretPage.css";
const SecretPage = () => {
  return (
    <Space
      direction="vertical"
      style={{
        backgroundColor: "#b0f1f1",
        width: "98.9vw",
        height: "100vh",
        position: "relative",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        level={1}
        style={{
          color: "#001529",
          fontSize: 60,
          marginTop:"50vh"
        }}
        id="secret"
      >
        😉💕🐷
      </Typography>
    </Space>
  );
};
export { SecretPage };
