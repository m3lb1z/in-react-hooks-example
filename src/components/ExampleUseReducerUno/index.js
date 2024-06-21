import { useReducer } from "react";

const ExampleUseReducerUno = () => {
  const [number, setNumber] = useReducer(
    (number, newNumber) => number + newNumber,
    0
  );

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => setNumber(10)}>+10</button>
    </>
  );
};

export default ExampleUseReducerUno;
