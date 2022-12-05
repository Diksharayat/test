import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";
export default function Services() {

  var uri = "http://localhost:1000/"
  const menu = [{ Img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLbH6_LOVKKoFEI1T06alVq9UDilSVSfhUw&usqp=CAU', Name: "Data Structures", teacher: 'Priyanka verma', Price: 15000, Duration: "4 months" },
  { Img: 'https://technophilic.co/images/blog/web-devlopment.jpg', Name: 'Web Development', teacher: 'Rahul Sharma', Price: 16000, Duration: "6 months" },
  { Img: 'https://s27389.pcdn.co/wp-content/uploads/2021/07/data-science-predictions-for-near-future-1024x440.jpeg.optimal.jpeg', Name: 'Data Science', teacher: 'Luci johnson', Price: 14000, Duration: "6 months" },
  { Img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png', Name: 'Python', teacher: 'Radhika Rai', Price: 15000, Duration: "4 months" },
  { Img: 'https://contentstatic.techgig.com/photo/90325682.cms', Name: 'C', teacher: 'Tessa johnson', Price: 18000, Duration: "2 months" },
  { Img: 'https://www.educative.io/v2api/editorpage/4872441600933888/image/5292920040062976', Name: 'C++', teacher: 'Aditya', Price: 13000, Duration: "2 months" },
  { Img: 'https://img.freepik.com/premium-photo/php-programming-code-abstract-technology-background_272306-152.jpg?w=2000', Name: 'Php', teacher: 'Hardin', Price: 15000, Duration: "6 months" },
  { Img: 'https://www.exploreinsiders.com/wp-content/uploads/2020/11/network.jpg', Name: 'Networks', teacher: 'Anderson', Price: 16000, Duration: "4 months" },]

  const [nm, setnm] = useState()
  const [img, setimg] = useState()
  const [tech, settech] = useState()
  const [pri, setpri] = useState()
  const [duration, setduration] = useState()

  function getcrs(x) {
    console.log(x)
    setnm(x.Name)
    setimg(x.Img)
    settech(x.teacher)
    setpri(x.Price)
    setduration(x.Duration)
  }

  var Name = localStorage.getItem('Username')
  console.log(Name)

  function getdata() {
    axios.post(uri + 'register', { Username: Name }).then((succ) => {
      console.log(succ.data)

    })
  }
  useEffect(() => {
    getdata()
  }, [])

  function buy(a, b, c, d) {
    console.log(a, b, c, d)
    if (Name) {
      // console.log('hai')

    } else {
      alert("Login First")
    }
  }

  function buypckk(e){
    
      e.preventDefault();
      var d = new FormData(e.currentTarget);
      var cot = Number(d.get('cot'))

      var abc = /[0-9]/
      var abc1 = '';
      for(var i=0;i<cot.length;i++){
          if(!abc.test(cot[i])){
              abc1+=cot[i]
          }
      }

      if(abc1!=''){
          alert("enter numbers only")
          e.target.cot.focus()
      } else{
          var obj={UName:Name,Cnm:nm,Pri:pri,cont:cot,Duration:duration,teacher:tech};
          console.log(obj)
          axios.post(uri + "buy", obj).then((succ) => {
             alert(succ.data)
            e.target.reset()
          })
      }

  }

  var navi=useNavigate()
  function mycources(){
    navi("/MyCources")
  }
  
   
    
  return (
    <>
      <Navbar />

      <div className="service" data-aos="fade-up" data-aos-delay="150">
        {menu.map((v) => (
          <div data-toggle="modal" data-target="#id7" className=' col-md-3 col-sm-4 col-xs-12 f-fmly bg6' style={{ marginBottom: 30, cursor: 'pointer' }} onClick={() => getcrs(v)}>
            <div className='abc' style={{ boxShadow: '0 0 3px rgba(0,0,0,.5', borderRadius: '5px', height: 220, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 30 }}>
              <img src={v.Img} className=' img-responsive' style={{ height: 140, width: 180, borderRadius: 20 }} />
              <h3>{v.Name}</h3>

            </div>
          </div>
        ))}

      </div>

      <div class="col-xs-3">

        <div class="modal fade" id="id7">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title">
                  <button class="close" data-dismiss="modal">x</button>
                  <h4 style={{ textAlign: "center", fontWeight: "bold", fontStyle: "oblique", fontSize: 20 }}>{nm}</h4>
                </div>
                <div class="modal-body" style={{ display: 'flex', justifyContent: 'space-around' }}>
                  <div>
                    <img src={img} height={150} style={{ borderRadius: 40 }} />
                    <h4> <i className="fa-solid fa-chalkboard-user"></i>&nbsp;Teacher:{tech}</h4>
                    <h4> <i className="fa-solid fa-calendar-days"></i>&nbsp;Duration:{duration}</h4>
                    <h4><i className="fa-solid fa-money-check-dollar"></i>&nbsp;Price:{pri}</h4>
                    <button style={{borderRadius:50}} className="btn btn-primary" onClick={() => buy(nm, tech, duration, pri)} data-toggle="modal" data-target="#myModal" data-dismiss="modal">Buy Course</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="https://kit.fontawesome.com/891d2fe5dc.js" crossorigin="anonymous"></script>
      </div>
      

      <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h3 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "cursive"  }}>Buy Cource</h3>
            </div>
            <div class="modal-body">
              <form className="form-group" onSubmit={buypckk}>
                Name:<input value={Name} readOnly className="form-control"/><br/>
                Cource:<input value={nm}  readOnly className="form-control"/><br/>
                  Teacher:<input value={tech} readOnly className="form-control"/><br/>
                Price:<input value={pri} readOnly className="form-control"/><br/>
                Contact:<input maxLength={10} name='cot' placeholder='Enter Contact' className="form-control" required/><br/>
                <button style={{borderRadius:50}} className="btn btn-primary" type="submit" onClick={mycources}>Buy</button>
              </form>
            </div>
            
          </div>

        </div>
      </div>

    </>
  )
}