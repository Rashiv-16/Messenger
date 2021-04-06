import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import reducers from "./Reducers";
import history from "./history";
import { SocketContext, socket } from "./context/socket";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <SocketContext.Provider value={socket}>
        <App />
      </SocketContext.Provider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
