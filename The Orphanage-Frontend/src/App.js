import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import { ConfigureStore } from "./store/store";
import { useSelector } from "react-redux";
import MainRouter from "./routes/MainRouter";

const store = ConfigureStore();

const App = () => {
  
  return (
    <Provider store={store}>
      <MainRouter />
    </Provider>
  );
};

export default App;
