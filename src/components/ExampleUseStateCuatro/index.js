import { useState } from "react";

const ExampleUseStateCuatro = () => {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#FFFFFF");

  const submit = (event) => {
    event.preventDefault();
    alert(`${sound} sounds like ${color}`);
    setSound("");
    setColor("#FFFFFF");
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          value={sound}
          type="text"
          placeholder="sound..."
          onChange={(e) => setSound(e.target.value)}
        />
        <input
          value={color}
          type="color"
          onChange={(e) => setColor(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default ExampleUseStateCuatro;
