import { useRef } from "react";

const ExampleUseRefUno = () => {
  const sound = useRef();
  const color = useRef();

  const submit = (event) => {
    event.preventDefault();
    const soundValue = sound.current.value;
    const colorValue = color.current.value;
    alert(`${soundValue} sounds like ${colorValue}`);
    sound.current.value = "";
    color.current.value = "";
  };

  return (
    <>
      <form onSubmit={submit}>
        <input ref={sound} type="text" placeholder="sound..." />
        <input ref={color} type="color" />
        <button>Add</button>
      </form>
    </>
  );
};

export default ExampleUseRefUno;
