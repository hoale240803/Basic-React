import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AutoCompleteSearch from "./AutoCompleteTextBox/AutoCompleteSearch";
import NewThingsES6 from "./ES6/NewThingsES6";
import Parent from "./HandleEvent/Parent.component";
import Table from "./Table/Index";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/homepage"></Route>
          <Route path="/login"></Route>
          <Route path="/">
            <AutoCompleteSearch />
            <NewThingsES6 />
            <Parent />
            <Table />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
