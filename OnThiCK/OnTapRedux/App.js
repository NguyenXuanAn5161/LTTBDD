import React from "react";
import { Provider } from "react-redux";
import ToDo from "./components/Todo";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <ToDo />
    </Provider>
  );
};

export default App;
