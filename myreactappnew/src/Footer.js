import React from "react";
import { Icon } from '@iconify/react';

export default function Footer(){
    return(
        <>
          <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">

          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <h3>IT Hub<span>.</span></h3>
              <p>
                A108 Adam Street <br/>
                NY 535022, USA<br/><br/>
                <strong>Phone:</strong> 7087241763<br/>
                <strong>Email:</strong> diksharayat1020@gmail.com<br/>
              </p>
              <div class="social-links mt-3">
                <a href="#" className="twitter"><i class="fa-brands fa-square-twitter"></i></a>
                <a href="#" className="facebook"><i class="fa-brands fa-facebook"></i></a>
                <a href="#" className="instagram"><i class="fa-brands fa-square-instagram"></i></a>
                <a href="#" className="google-plus"><i class="fa-brands fa-google-plus"></i></a>
                <a href="#" className="linkedin"><i class="fa-brands fa-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><Icon icon="bx:chevron-right" /> <a href="#">Home</a></li>
              <li><Icon icon="bx:chevron-right" /><a href="#">About </a></li>
              <li><Icon icon="bx:chevron-right" /> <a href="#">Services</a></li>
              <li><Icon icon="bx:chevron-right" /> <a href="#"> Team</a></li>
              <li><Icon icon="bx:chevron-right" /><a href="#">Contact</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><Icon icon="bx:chevron-right" /><a href="#">Web Design</a></li>
              <li><Icon icon="bx:chevron-right" /> <a href="#">Web Development</a></li>
              <li><Icon icon="bx:chevron-right" /> <a href="#">Product Management</a></li>
              <li><Icon icon="bx:chevron-right" /><a href="#">Marketing</a></li>
              <li><Icon icon="bx:chevron-right" /> <a href="#">Graphic Design</a></li>
            </ul>
          </div>

         

        </div>
      </div>
    </div>

    

    <div class="container">
      <div class="copyright">
        &copy; Learn With  <strong><span>US</span></strong>
      </div>
      <div class="credits">
       
        Designed by <strong><span>IT Hub</span></strong>
      </div>
    </div>
  </footer>
  <script src="https://kit.fontawesome.com/891d2fe5dc.js" crossorigin="anonymous"></script>
  <script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js"></script>

        
        </>
    )
}