//import '../assets/css/styles.css';
import me from "../assets/img/me.jpg"

function Header() {
    return (
      <div className="Header" id="header">
          <header class="container header active" id="home">
                <div class="header-content">
                    <div class="left-header">
                        <div class="h-shape"></div>
                        <div class="image">
                            <img src={me} alt=""></img>
                        </div>
                    </div>
                    <div class="right-header">
                        <h1 class="name">
                            Hi, I'm <span>Michael Terrell Prempeh. </span>
                            A Web Developer.
                        </h1>
                        <p>
                            I'm a Web Developer, I love to create beautiful and functional websites.
                            I love Developering because it brings the creative in me.
                        </p>
                        <div class="btn-con">
                            <a href="" class="main-btn">
                                <span class="btn-text">Download CV</span>
                                <span class="btn-icon"><i class="fas fa-download"></i></span>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
      </div>
    );
  }

  export default Header;