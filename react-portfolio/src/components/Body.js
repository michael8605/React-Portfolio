import Header from "./Header";
import '../assets/css/styles.css';
import About from "./About";
import Control from "./Control";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';


function Body() {
    return (
      <div className="Body">
        
        
          <main className="l-main">
            <Header />
            <About />
            <Control />
            <Portfolio />
            <Contact />
          </main>
        

      </div>
    );
  }

  export default Body;