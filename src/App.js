import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Home />
      </div>
    </Router>
  );
}

export default App;
