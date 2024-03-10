import { Space, Typography } from "antd";
import "antd/dist/antd.css";
import styles from "./HomePage.module.css";
import "./HomePage.module.css";

const { Title } = Typography;
const HomePage = () => {
  return (
    <Space direction="vertical" className="gradient">
      <Title
        level={1}
        className={styles.title}
      >
        Filippo Zhou
      </Title>
      <Title
        level={3}
        className={styles.year}
      >
        2022
      </Title>
    </Space>
  );
};
export { HomePage };
