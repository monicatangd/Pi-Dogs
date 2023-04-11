import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import HomePage from "./components/HomePage/HomePage.jsx";
import FormPage from "./components/FormPage/FormPage.jsx";
import Detail from "./components/Detail/Detail.jsx";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={HomePage}/>
      <Route path="/dog" component={FormPage}/>
      <Route exact path="/detail/:id" component={Detail}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
