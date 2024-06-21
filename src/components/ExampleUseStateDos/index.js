import { useState } from "react";

const ExampleUseStateDos = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <input
        type="checkbox"
        value={checked}
        onChange={() => setChecked(!checked)}
      />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
};

export default ExampleUseStateDos;
