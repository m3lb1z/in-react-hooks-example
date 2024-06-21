import { useReducer } from "react";

const initialState = {
  message: "Hi",
};

function reducer(state, action) {
  switch (action.type) {
    case "yell":
      return {
        message: `Hey! I just said ${state.message}`,
      };
    case "whisper":
      return {
        message: `excuse me! I just said ${state.message}`,
      };
  }
}

const ExampleUseReducerTres = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch({ type: "yell" })}>Yell</button>
      <button onClick={() => dispatch({ type: "whisper" })}>whisper</button>
    </>
  );
};

export default ExampleUseReducerTres;
