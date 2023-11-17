import { Provider } from "react-redux";
import Router from "./Router";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
