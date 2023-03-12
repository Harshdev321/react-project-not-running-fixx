import { BrowserRouter as Router, Switch, Route , Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <Router>
    <NavBar />
    <Switch>
       <Route path="/" >
          <Header title="wecubetech" img="/workspaces/codespaces-react/public/assets/img/home-bg.jpg" />
          <Home />
       </Route>
    </Switch>
    <About />
    <Footer />
    </Router>

  );
}

export default App;
