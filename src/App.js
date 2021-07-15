import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, ComponentTest, Login } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Switch>
          <Route path="/component" component={ComponentTest} />

          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
