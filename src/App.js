import logo from './logo.svg';
import './App.css';
import { render } from "react-dom"
import Styled from "styled-components";
import { Router,  Link, useNavigate,  createHistory, LocationProvider} from "@reach/router"
import Colors from "./utils/colors"
import NavTabs from "./components/navigation/NavTabs"
import Home from "./components/home/Home"

function App() {

  

  return (
    <>
      <NavTabs />
      <Router>
          <Home path="/" colors={Colors}/>
      </Router>
     </>
  );
}

export default App;

