import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <div id='everythingButFooter'>
        <Router>
        <Nav />
          <div>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={About} />
            <Route exact path={process.env.PUBLIC_URL + "/portfolio"} component={Portfolio} />
            <Route exact path={process.env.PUBLIC_URL + "/contact"} component={Contact} />
          </div>
        </Router>
      </div>
      <footer id='footer' className='bg-dark text-white-50'>
        <p>Copyright Plover Brown, 2020 ©</p>
      </footer>
    </div>


  );
}

export default App;
