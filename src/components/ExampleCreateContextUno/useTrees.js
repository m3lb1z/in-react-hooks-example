import { useContext } from "react";
import { TreesContext } from "./TreesProvider";

export const useTrees = () => {
  return useContext(TreesContext);
};
