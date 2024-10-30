import { Button } from "antd";
import React from "react";

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div className="flex gap-1 flex-col">
      <h1>Hello, React!</h1>
      <Button
        type="primary"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click me: {count}
      </Button>
    </div>
  );
};

export default App;
