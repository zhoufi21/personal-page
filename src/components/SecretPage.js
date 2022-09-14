import { Space, Typography } from "antd";
import styles from "./SecretPage.module.css";
const SecretPage = () => {
  return (
    <Space
      direction="vertical"
      className={styles.secretPage}
    >
      <Typography
        level={1}
        className={styles.secret}
      >
        😉💕🐷
      </Typography>
    </Space>
  );
};
export { SecretPage };
