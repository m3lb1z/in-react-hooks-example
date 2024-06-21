import { useState } from "react";

const ExampleUseState = () => {
  const [status, setStatus] = useState("Not delivered");

  return (
    <>
      <h1>The package is: {status}</h1>
      <button onClick={() => setStatus("Delivered")}>Deliver</button>
    </>
  );
};

export default ExampleUseState;
