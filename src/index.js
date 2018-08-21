import React from "react";
import ReactDOM from "react-dom";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import reducer from "./store/reducers/todos";

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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reduxStore = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <MuiThemeProvider theme={muiTheme}>
    <Provider store={reduxStore}>
      <App />
    </Provider>
  </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
