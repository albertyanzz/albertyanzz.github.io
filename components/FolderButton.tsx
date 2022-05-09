import { useContext } from "react";
import FolderIcon from "@mui/icons-material/Folder";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import Box from "@mui/material/Box";
import { FolderContext } from "../lib/contexts";

interface IProps {
  name: string;
}

export const FolderButton: React.FC<IProps> = ({ name }) => {
  const folderStyle = {
    fontSize: 50,
    color: "orange",
    marginBottom: -1,
  };

  const { state: selected, dispatch: setSelected } = useContext(FolderContext);
  const isSelected = selected === name;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "60px",
        height: "60px",
      }}
      onClick={() => {
        setSelected(name);
      }}
    >
      {isSelected ? (
        <FolderOpenIcon sx={folderStyle}></FolderOpenIcon>
      ) : (
        <FolderIcon sx={folderStyle}></FolderIcon>
      )}
      <span>{name}</span>
    </Box>
  );
};
