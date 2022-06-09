//import '../assets/css/styles.css';
//import '../assets/js/main';
//import {Helmet} from "react-helmet";
import {useState} from 'react';

function Control() {
    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);
    const [isActive3, setIsActive3] = useState(false);
    const [isActive4, setIsActive4] = useState(false);
    const [isActive5, setIsActive5] = useState(false);
    const changeColor1= () => {
        setIsActive1(current => !current);
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(false)
    }
    const changeColor2= () => {
        setIsActive2(current => !current);
        setIsActive1(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive5(false)
    }
    const changeColor3= () => {
        setIsActive3(current => !current);
        setIsActive2(false)
        setIsActive1(false)
        setIsActive4(false)
        setIsActive5(false)
    }
    const changeColor4= () => {
        setIsActive4(current => !current);
        setIsActive2(false)
        setIsActive3(false)
        setIsActive1(false)
        setIsActive5(false)
    }
    const changeColor5= () => {
        setIsActive5(current => !current);
        setIsActive2(false)
        setIsActive3(false)
        setIsActive4(false)
        setIsActive1(false)
    }
    return (
      <div className="Control-comp">
            <div class="controls">
                <a href='/'><div class="control active-btn" data-id="home" style={{backgroundColor: isActive1 ? '#27AE60' : '', color:isActive1? 'white':'',}} onClick={changeColor1}>
                    <i class="fas fa-home"></i>
                </div></a>
                <a href='#about'><div class="control" data-id="about" style={{backgroundColor: isActive2 ? '#27AE60' : '', color:isActive2? 'white':'',}} onClick={changeColor2}>
                    <i class="fas fa-user"></i>
                </div> </a>
                <a href='#portfolio'><div class="control" data-id="portfolio" style={{backgroundColor: isActive3 ? '#27AE60' : '', color:isActive3? 'white':'',}} onClick={changeColor3}>
                  
                        <i class="fas fa-briefcase"></i>
              
                </div>      </a>
                <a href='#skills'><div class="control" data-id="blogs" style={{backgroundColor: isActive4 ? '#27AE60' : '', color:isActive4? 'white':'',}} onClick={changeColor4}>
                    <i class="far fa-newspaper"></i>
                </div> </a>
                <a href='#contact'><div class="control" data-id="contact" style={{backgroundColor: isActive5 ? '#27AE60' : '', color:isActive5? 'white':'',}} onClick={changeColor5}>
                    <i class="fas fa-envelope-open"></i>
                </div></a>
            </div>
            <div class="theme-btn">
                <i class="fas fa-adjust"></i>
            </div>
            
                <script src="main.js"></script>
            
            
      </div>
    );
  }

  export default Control;