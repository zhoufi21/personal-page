import { Typography, Input, Button, message } from "antd";
import { useState } from "react";
const { Title } = Typography;

const FirstPage = ({ next }) => {
  const [keyword, setKeyword] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const checkAnswer = () => {
    if (keyword.toLowerCase() === "sudoku") {
      messageApi.open({
        content: "Correct Answer",
        duration: 2,
        type: "success",
      });
      next();
    } else {
      messageApi.open({
        content: "Hint: Read the message",
        duration: 2,
        type: "error",
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <Title>To unlock the next part,</Title>
      <Title>you need to unlock this everyday</Title>
      <Input
        placeholder="Enter the keyword"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button onClick={checkAnswer}
        style={{
            textAlign: "center",
            left: "35%",
            marginTop: "20px",
        }}
      >Check Answer</Button>
    </div>
  );
};
export { FirstPage };
