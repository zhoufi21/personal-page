import { Space, Typography } from "antd";
import styles from "./SecretPage.module.css";
import { useState, useEffect } from "react";

import { Welcome } from "./Welcome";
import { FirstPage } from "./FirstPage";
import { SecondPage } from "./SecondPage";
import { ThirdPage } from "./ThirdPage";
import { LastPage } from "./LastPage";

const SecretPage = () => {
  const [current, setCurrent] = useState(0);

  const pages = {
    0: <Welcome next={() => setCurrent(1)} />,
    1: <FirstPage next={() => setCurrent(2)}/>,
    2: <SecondPage next={() => setCurrent(3)}/>,
    3: <ThirdPage next={() => setCurrent(4)}/>,
    4: <LastPage/>,
  };
  //😉💕🐷
  //if date is 06/09/2023, then settext to "happy birthday"
  useEffect(() => {}, []);
  const isDay = () => {
    const date = new Date();
    if (
      date.getMonth() === 8 &&
      date.getDate() === 8 &&
      date.getFullYear() === 2023
    ) {
      return true;
    }
    return false;
  };
  return (
    <Space direction="vertical" className={styles.secretPage}>
      {isDay() ? (
          <div>{pages[current]}</div>
      ) : (
        <Typography level={1} className={styles.secret}>
          😉💕🐷
        </Typography>
      )}
    </Space>
  );
};
export { SecretPage };
