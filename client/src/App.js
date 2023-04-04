import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={HomePage}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
