import React from 'react'

function Footers() {
  return (
<>

    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="logo">
<div className=' deco'>

          <h1> FASHION</h1>
          <h5>&emsp;&emsp;&emsp;&emsp;NETWORK</h5>
</div>
          <p className='mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  </p>
          </div> 
                      {/* <div className="footer-about ">
              <img src="https://th.bing.com/th/id/OIP.OPu7-gGtg42-j0w6yekyGAHaBt?w=350&h=80&c=7&r=0&o=5&pid=1.7" alt="" className="img-fluid"/>
                      </div> */}

          </div>
          <div className="col-md-3">
            <div className="useful-link">
              <h2>Useful Links</h2>
              
              <div className="use-links">
                <li><a href="index.html"><i className="fa-solid fa-angles-right"></i> Home</a></li>
                <li><a href="about.html"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
                <li><a href="gallery.html"><i className="fa-solid fa-angles-right"></i> Gallery</a></li>
                <li><a href="contact.html"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
              </div>
            </div>

          </div>
                    <div className="col-md-3">
                        <div className="social-links">
              <h2>Follow Us</h2>
              <img src="./assets/images/about/home_line.png" alt=""/>
              <div className="social-icons">
                <li><a href=""><i className="fab fa-facebook-f"></i> Facebook</a></li>
                <li><a href=""><i className="fab fa-instagram"></i> Instagram</a></li>
                <li><a href=""><i className="fab fa-linkedin-in"></i> Linkedin</a></li>
              </div>
            </div>
                    

                    </div>
          <div className="col-md-3">
            <div className="address">
              <h2>Address</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="img-fluid"/>
              <div className="address-links">
                <li className="address1"><i className="fa-solid fa-location-dot"></i> Fashion Network Sanganer -
                   Jaipur
                   Rajasthan 302024</li>
                   <li><a href="tel:9876543210"><i className="fa-solid fa-phone"></i> +91 9876543210</a></li>
                   <li><a href="mailto:FashionNetwork.HEPL@gmail.com"><i className="fa-solid fa-envelope"></i> FashionNetwork.HEPL@gmail.com</a></li>
              </div>
            </div>
          </div>
                  
        </div>
      </div>

    </footer>

    <section id="copy-right">
      <div className="copy-right-sec"><i className="fa-solid fa-copyright"></i>  
        All Right Reserved 2024| Powered By <a href="#">Fashion Network</a> 


      </div>

    </section>


</> 
 )
}

export default Footers