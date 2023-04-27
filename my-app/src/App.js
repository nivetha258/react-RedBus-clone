
import Routing from "./Pages/routing";
import { Provider } from "react-redux";
import { store } from "./Store/store";
//import { useEffect } from "react";

function App() {


  return (
    <div className="App">
      <Provider store={store}>
        {console.log(store)}
        <Routing />
      </Provider>
    </div>
  );
}

export default App;
