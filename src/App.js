import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import NavBar from "./components/NavBar";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Products} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
