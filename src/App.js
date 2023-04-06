import { Provider } from "react-redux";
import "./App.css";
import { makeStore } from "./redux/store";
import Routing from "./routes";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Provider store={makeStore()}>
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
