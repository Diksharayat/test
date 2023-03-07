import React from 'react'
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

function Home() {
  
  var navi=useNavigate()
  function service(){
    navi("/Services")
  }
  
  return (
    <>
      <Navbar />
      <section id="hero" class="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">

          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <div className="col-xl-8 col-lg-12">
              <h1 className='hero'>Get your IT <br />Solutions  here<span>.</span></h1>
              <h2>We are team of talented Developers</h2>
            </div>
          </div>

          <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250" data-aos-duration="3000">
            <div className="col-xl-2 col-md-4" onClick={service}>
              <div className="icon-box">
                <h3><a href="">Data structures</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" onClick={service}>
              <div className="icon-box">

                <h3><a href=""> Web Development</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" onClick={service}>
              <div className="icon-box">
                <h3><a href="">Data science</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" onClick={service}>
              <div className="icon-box">

                <h3><a href="">Python</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" onClick={service}>
              <div className="icon-box">

                <h3><a href="">C,C++</a></h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4" onClick={service}>
              <div className="icon-box">

                <h3><a href="">Php</a></h3>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      

    <Footer/>
    </>
  )
}


export default Home;