import React from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import Iframe from 'react-iframe'
import About from "./About";
export default function Contact() {

  var uri = "http://localhost:1000/"
  function contact(e) {
    e.preventDefault()
    var d = new FormData(e.currentTarget);
    var name = d.get("name")
    var email = d.get("email")
    var cource = d.get("cource")
    var message = d.get("message")

    console.log(name + email + cource + message);

    var data = { UserName: name, Email: email, Cource: cource, Message: message }

    axios.post(uri + "feedback", data).then((succ) => {
      //  alert(succ.data)
      alert("Feedback Added")
    })

  }

  return (

    <>
      <Navbar />

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h1 style={{ fontWeight: "bold" }}>Contact</h1>

          </div>

          <div>
            <Iframe style={{ border: 0, width: "500px", height: 200 }} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></Iframe>
          </div>

          <div className="row mt-5">

            <div className="col-lg-4">
              <div className="info">
                <div >
                  <i class="fa-solid fa-location-pin"></i>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>

                <div className="email">
                  <i class="fa-solid fa-envelope"></i>
                  <h4>Email:</h4>
                  <p>diksharayat1020@gmail.com</p>
                </div>

                <div className="phone">
                  <i class="fa-solid fa-phone"></i>
                  <h4>Call:</h4>
                  <p>9844539830</p>
                </div>

              </div>

            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">

              <form className="form" onSubmit={contact}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    Name:<input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    Email:<input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div className="form-group mt-3">
                  Course:<input type="text" class="form-control" name="cource" id="cource" placeholder="Course" required />
                </div>
                <div className="form-group mt-3">
                  Message:<textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>

                <div className="form-group mt-3">
                  <input style={{borderRadius:50}} className="btn btn-primary" value={'Submit'} type="submit" />
                </div>
              </form>

            </div>

          </div>

        </div>

        <script src="https://kit.fontawesome.com/891d2fe5dc.js" crossorigin="anonymous"></script>
      </section>

      
    </>
  )
}