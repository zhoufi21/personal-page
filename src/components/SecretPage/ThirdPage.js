import { Typography, Button, message, InputNumber } from "antd";
import { useState } from "react";
const { Title } = Typography;

const ThirdPage = ({ next }) => {
  const [number, setNumber] = useState(0);
  const [messageApi, contextHolder] = message.useMessage();

  const checkAnswer = () => {
    if (number === 519687342) {
      messageApi.open({
        content: "Correct Answer",
        duration: 2,
        type: "success",
      });
      next();
    } else {
      messageApi.open({
        content: "Hint: Combine all the information",
        duration: 2,
        type: "error",
      });
    }
  };

  return (
    <div>
      {contextHolder}
      <Title level={2}>A lucky number you have</Title>
      <Title level={2}>How about a lucky row?</Title>
      <InputNumber
        placeholder="Enter the lucky row"
        value={number}
        onChange={(e) => setNumber(e)}
        style={{
            width: "15vw",
        }}
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
export { ThirdPage };
