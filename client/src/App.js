import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./page/Home/Home";
function App() {
  return (
    // Định tuyển path cho các pages . sử dụng react dom router
    <Router>
      <Switch>
        {/* VD : localhost:3000/header */}
        <Route exact path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
