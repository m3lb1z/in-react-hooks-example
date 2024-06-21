import { useInput } from "./useInput";

const ExampleUseCustomUno = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#FFFFFF");

  const submit = (event) => {
    event.preventDefault();
    alert(`${titleProps.value} sounds like ${colorProps.value}`);
    resetTitle();
    resetColor();
  };

  return (
    <>
      <h2>Custom Hooks</h2>
      <form onSubmit={submit}>
        <input {...titleProps} type="text" placeholder="sound..." />
        <input {...colorProps} type="color" />
        <button>Add</button>
      </form>
    </>
  );
};

export default ExampleUseCustomUno;
