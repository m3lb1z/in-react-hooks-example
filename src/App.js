import "./App.css";
import ExampleUseState from "./components/ExampleUseStateUno";
import ExampleUseStateDos from "./components/ExampleUseStateDos";
import ExampleUseStateTres from "./components/ExampleUseStateTres";
import ExampleUseEffectUno from "./components/ExampleUseEffectUno";
import ExampleUseEffectDos from "./components/ExampleUseEffectDos";
import ExampleUseReducerUno from "./components/ExampleUseReducerUno";
import ExampleUseReducerDos from "./components/ExampleUseReducerDos";
import ExampleUseReducerTres from "./components/ExampleUseReducerTres";
import ExampleUseRefUno from "./components/ExampleUseRefUno";
import ExampleUseStateCuatro from "./components/ExampleUseStateCuatro";
import ExampleUseCustomUno from "./components/ExampleUseCustomUno";
import { TreesContext } from "./components/ExampleCreateContextUno/TreesProvider";
import { useContext } from "react";
import { useTrees } from "./components/ExampleCreateContextUno/useTrees";
import { useFetch } from "./components/ExampleUseCustomDos/useFetch";
import ExampleUseCustomDos from "./components/ExampleUseCustomDos";

function App() {
  const result = useTrees();
  console.log(result);

  return (
    <div>
      <h1>Trees I've heard of</h1>
      <ul>
        {result.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
      <ExampleUseCustomDos login="emrodriguez" />
    </div>
  );
}

export default App;
