import { Space, Typography } from "antd";
import "./SecretPage.css";
import { useState,useEffect } from "react";
import styles from "./SecretPage.module.css";
const SecretPage = () => {
  // If the date is 11/09/2023 BST, then show the secret text
  const [text, setText] = useState("regular day")
  //"😉💕🐷"
  useEffect(() => {
    const date = new Date();
    console.log(date.getDate(), date.getMonth(), date.getFullYear());
    if (date.getDate() === 6 && date.getMonth() === 8 && date.getFullYear() === 2023) {
        setText("special day")
    }
    }, [setText])

  return (
    <Space
      direction="vertical"
      className={styles.secretPage}
    >
      <Typography
        level={1}
        className={styles.secret}
      >
        {text}
      </Typography>
    </Space>
  );
};
export { SecretPage };
