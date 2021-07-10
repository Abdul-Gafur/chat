import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Switch>
          <Route exact path="/login" render={() => "Login"} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
