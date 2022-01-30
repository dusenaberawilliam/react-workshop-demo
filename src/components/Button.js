import { display } from "@mui/system";
import React from "react";

export const Button = ({ children, deletePro }) => {

  const deleteStyle = {
    padding: "6px 20px",
    backgroundColor: "#970e0ed3",
    color: "#ffffff",
    border: "none",
    borderRadius: "3px"
  }

  return (
    <button onClick={deletePro} style={deleteStyle}>
      {children}
    </button>
  );
};


