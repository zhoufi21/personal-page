import { Typography, Button } from "antd";
import PlayCircleOutlined from "@ant-design/icons/PlayCircleOutlined";
const { Title } = Typography;


const Welcome = ({next}) => {
  return (
    <div>
      <Title>Welcome to the surprise</Title>
      <Button onClick={next}>
        Start <PlayCircleOutlined />
      </Button>
    </div>
  );
};
export { Welcome };
