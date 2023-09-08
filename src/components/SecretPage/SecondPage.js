import { Typography, Input, Button, message, InputNumber } from "antd";
import { useState } from "react";
const { Title } = Typography;

const SecondPage = ({ next }) => {
  const [number, setNumber] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const checkAnswer = () => {
    if (number === 7) {
      messageApi.open({
        content: "Correct Answer",
        duration: 2,
        type: "success",
      });
      next();
    } else {
      messageApi.open({
        content: "Hint: 5x5",
        duration: 1,
        type: "error",
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <Title level={2}>A cipher we find with a square to fit</Title>
      <Title level={2}>wddcehweafyewnldrhtyiiyw</Title>
      <InputNumber 
        placeholder="What number did you find?"
        value={number}
        onChange={(e) => setNumber(e)}
        />
      <Button
        onClick={checkAnswer}
        style={{
          textAlign: "center",
          left: "35%",
          marginTop: "20px",
        }}
      >
        Check Answer
      </Button>
    </div>
  );
};
export { SecondPage };
