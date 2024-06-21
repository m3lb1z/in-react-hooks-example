import { useReducer } from "react";

const ExampleUseReducerDos = () => {
  const [checked, toggle] = useReducer((checked) => !checked, false);

  return (
    <>
      <input type="checkbox" value={checked} onChange={toggle} />
      <p>{checked ? "checked" : "not checked"}</p>
    </>
  );
};

export default ExampleUseReducerDos;
