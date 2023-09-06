import { Space, Typography } from "antd";
import "./SecretPage.css";
import { useState,useEffect } from "react";
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
      style={{
        backgroundColor: "#f8f2bd",
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
          color: "#2b2516",
          fontSize: 60,
          marginTop:"50vh"
        }}
        id="secret"
      >
        {text}
      </Typography>
    </Space>
  );
};
export { SecretPage };
