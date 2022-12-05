import React from 'react'
import Navbar from './Navbar'

export default function About() {
  return (


    <div>
      <Navbar />




      
      <div data-aos="zoom-in-up" data-aos-delay="150" data-aos-duration="800" id="myCarousel" class="carousel slide" data-ride="carousel" style={{marginTop:'-20px',marginBottom:60}}>
        <ol class="carousel-indicators" >
          <li data-target="#myCarousel" data-slide-to="0" class="active" ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner">
          <div class="caro item active">

            
            <img style={{width:"100%",height:'100vh', margin:"0 auto"}} src="https://c1.wallpaperflare.com/preview/63/536/911/office-meeting-computer.jpg" alt="Los Angeles" />
           
          </div>

          <div class=" caro item">
            <img style={{width:"100%",height:'100vh',margin:"0 auto"}} src="https://images.pexels.com/photos/8000529/pexels-photo-8000529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Chicago" />
          </div>

          <div class="caro item">
            <img style={{width:"100%",height:'100vh',margin:"0 auto"}} src="https://thumbs.dreamstime.com/b/modern-office-open-space-interior-computer-room-lab-neatly-placed-rows-136335283.jpg" alt="New York" />
          </div>
        </div>

        <a class="left carousel-control" href="#myCarousel" data-slide="prev" >
          <span class="glyphicon glyphicon-chevron-left"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
          <span class="glyphicon glyphicon-chevron-right"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
     

        <div className='col-xs-12 about' id="about" data-aos="fade-right" data-aos-duration="3000">
          
            <div style={{width:'100%'}}>
              <h1 style={{borderBottom:"2px solid whitesmoke"}}>All about IT Hub</h1> 
              </div>
            <h3 className="fst-italic" style={{color:"whitesmoke"}}>
              IT Hub was established as a company in Delhi in 2009 with an aim of becoming the best IT service provider across the globe.
            
            </h3>
            <br/>
            <ul type='none'>
              <li style={{fontSize:17}} ><i className="fa-sharp fa-solid fa-circle-check"></i>&nbsp;
                Our company is nurtured by a team of experienced professionals who deliver their best knowledge on every project they are assigned.
                We believe in improving our skills every single day to deliver high-quality results to our clients to enhance their business, sales, leads, and ultimately, profits.
                
              </li>
              <li style={{fontSize:17}}><i className="fa-sharp fa-solid fa-circle-check"></i>&nbsp; With every project that we deliver, we deliver our respect, creativity, quality, transparency, and teamwork to our clients.</li>
              <li style={{fontSize:17}}><i className="fa-sharp fa-solid fa-circle-check"></i>&nbsp; We have the experience, expertise, and capabilities to enable organizations to accelerate their service processes in every possible way. We are known for our excellent
                customer satisfaction, cost-effectiveness, and innovative skills that are unparalleled.</li>
              <li style={{fontSize:17}}><i className="fa-sharp fa-solid fa-circle-check"></i>&nbsp;IT Hub has highest level of infrastructure with 200+ computers, 14 Labs and top industry experts as trainers</li>
              <li style={{fontSize:17}}><i className="fa-sharp fa-solid fa-circle-check"></i>&nbsp;The Placement team at IT Hub is fully passionate to place each and every student at any cost with quality placements.</li>

            </ul><br/>
            <p style={{fontSize:19, }}>
            Over the years, with its hardwork, dedication and committment, IT Hub has become one of the biggest brand name for quality industrial training in Chandigarh, Mohali and India.
              We are serving our clients with the world-class services for more than seven years now. The clients are delivered with the best IT solutions after we have developed a great understanding of their business and requirements.
              Our team works on the client projects like its own and that is the reason why we hold the edge in the league.
            </p>
         
        </div >
        <script src="https://kit.fontawesome.com/891d2fe5dc.js" crossorigin="anonymous"></script>

   



    </div > 
  )
}

