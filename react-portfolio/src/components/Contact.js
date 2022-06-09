//import '../assets/css/styles.css';
function Contact() {
    return (
      <div className="Contact" id="contact">
          <section class="container contact" id="contact">
            <div class="contact-container">
                <div class="main-title">
                    <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
                </div>
                <div class="contact-content-con">
                    <div class="left-contact">
                        <h4>Contact me here</h4>
                        <p>
                            This is how you can reach me
                        </p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    : New Jersey, United State Of America
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: prempehmichael1@gmail.com</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Education</span>
                                </div>
                                <p>
                                    <span>: Montclair State University</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-user-graduate"></i>
                                    <span>Mobile Number</span>
                                </div>
                                <p>
                                    <span>: 8605957460</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>:English, Twi</span>
                                </p>
                            </div>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="www.facebook.com" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                                <a href="#" target="_blank">
                                    <i class="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="right-contact">
                        <form action="" class="contact-form">
                            <div class="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME"></input>
                                <input type="email" required placeholder="YOUR EMAIL"></input>
                            </div>
                            <div class="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT"></input>
                            </div>
                            <div class="input-control">
                                <textarea name="" id="" cols="15" rows="8" placeholder="Message Here..."></textarea>
                            </div>
                            <div class="submit-btn">
                                <a href="#" class="main-btn">
                                    <span class="btn-text">Download CV</span>
                                    <span class="btn-icon"><i class="fas fa-download"></i></span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }

  export default Contact;