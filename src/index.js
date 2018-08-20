import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

const muiTheme = createMuiTheme({
  typography: {
    fontFamily: ["Cabin", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#2D112C"
    },
    secondary: {
      main: "#EF4339"
    }
  }
});

const app = (
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
