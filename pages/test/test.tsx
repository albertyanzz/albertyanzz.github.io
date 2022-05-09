import { useReducer, createContext } from "react";
import { Params } from "next/dist/server/router";
import type { NextPage } from "next";
import { FolderButton } from "../../components/FolderButton";
import { FolderContext } from "../../lib/contexts";
import Box from "@mui/material/Box";

const Test: NextPage<Params> = () => {
  function reducer(state: string, action: string) {
    return action;
  }

  const [selected, setSelected] = useReducer(reducer, "");

  return (
    <Box sx={{ paddingLeft: 10 }}>
      <FolderContext.Provider
        value={{ state: selected, dispatch: setSelected }}
      >
        <FolderButton name="Folder"></FolderButton>
        <FolderButton name="Files"></FolderButton>
        <FolderButton name="About"></FolderButton>
        <FolderButton name="Experience"></FolderButton>
        <FolderButton name="Other"></FolderButton>
      </FolderContext.Provider>
    </Box>
  );
};

export default Test;
