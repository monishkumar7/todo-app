import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducers/reducer";

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

const reduxStore = createStore(reducer);

const app = (
  <MuiThemeProvider theme={muiTheme}>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
