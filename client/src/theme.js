import React from "react";
import "./App.css";
import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontWeight: "bold",
        backgroundColor: "#379683",
        margin: "10px",
        "&:hover": {
          backgroundColor: "#5CDB95",
        },
      },
    },
  },
});
