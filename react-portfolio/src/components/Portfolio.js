import '../assets/css/styles.css';
import port1 from "../assets/img/port1.jpg"
import port2 from "../assets/img/port2.jpg"
import port3 from "../assets/img/port3.jpg"
import port4 from "../assets/img/port4.jpg"
import port5 from "../assets/img/port5.jpg"
import port6 from "../assets/img/port6.jpg"
import port7 from "../assets/img/port7.jpg"
function Portfolio() {
    return (
      <div className="Portfolio" id='portfolio'>
          <section class="container" id="portfolio">
            <div class="main-title">
                <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
            </div>
            <p class="port-text">
                Here is some of my work that I've done in various programming languages.
            </p>
            <div class="portfolios">
                <div class="portfolio-item">
                    <div class="image">
                        <img src={port1} alt=""></img>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src={port2} alt=""></img>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src={port3} alt=""></img>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src={port4} alt=""></img>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src={port5} alt=""></img>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src={port2} alt=""></img>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="portfolio-item">
                    <div class="image">
                        <img src={port7} alt=""></img>
                    </div>
                    <div class="hover-items">
                        <h3>Project Source</h3>
                        <div class="icons">
                            <a href="#" class="icon">
                                <i class="fab fa-github"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-behance"></i>
                            </a>
                            <a href="#" class="icon">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }

  export default Portfolio;