import { createContext } from "react";

const TreesContext = createContext();

const TreesProvider = ({ children }) => {
  const trees = [
    {
      id: 1,
      type: "Roble",
    },
    {
      id: 2,
      type: "Pino",
    },
    {
      id: 3,
      type: "Abeto",
    },
    {
      id: 4,
      type: "Sauce",
    },
    {
      id: 5,
      type: "Arce",
    },
    {
      id: 6,
      type: "Ciprés",
    },
    {
      id: 7,
      type: "Cedro",
    },
    {
      id: 8,
      type: "Olmo",
    },
    {
      id: 9,
      type: "Secuoya",
    },
    {
      id: 10,
      type: "Abedul",
    },
  ];

  return (
    <TreesContext.Provider value={trees}>{children}</TreesContext.Provider>
  );
};

export { TreesContext, TreesProvider };
