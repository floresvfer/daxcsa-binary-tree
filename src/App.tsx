import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Router from "./pages/router";
import {Provider} from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
