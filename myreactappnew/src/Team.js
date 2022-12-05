import axios from "axios";
import React,{useState,useEffect} from "react";
import About from "./About";
import Navbar from "./Navbar";
export default function Team() {

    var uri = "http://localhost:1000/"
    const menu = [{ Img: 'https://thumbs.dreamstime.com/b/female-school-teacher-9707714.jpg', Name: "Priyanka verma" ,age:"27 years",qua:"B.tech",ex:"2 years"},
    { Img: 'https://media.istockphoto.com/photos/young-male-educator-stands-proudly-in-school-building-picture-id1023229588?k=20&m=1023229588&s=612x612&w=0&h=frmAGI7ieDZmnqHu1hVRW-PRgBj7YFojTlh8f_dl3BU=' ,Name:'Rahul Sharma', age:"26 years", qua:"M.tech",ex:"2 years" },
    { Img: 'https://watermark.lovepik.com/photo/20211208/large/lovepik-female-teacher-teaching-image-picture_501628247.jpg', Name: 'Luci johnson',age:"26 years" ,qua:"B.tech" ,ex:"3 years"},
    { Img: 'https://media.istockphoto.com/photos/portrait-of-a-happy-latin-american-teacher-at-the-school-picture-id687830554?k=20&m=687830554&s=612x612&w=0&h=mwUu8oSPaIbhg6bnr0DCRJBQuNzfLQ33zpMsMkOus20=', Name: 'Radhika Rai',age:"26 years" ,qua:"M.tech",ex:"1 years"},
    { Img: 'https://img.freepik.com/free-photo/excited-young-blonde-female-teacher-wearing-glasses-classroom-standing-front-chalkboard-holding-book-showing-empty-hand-with-copy-space_141793-106399.jpg?w=2000', Name: 'Tessa johnson',age:"26 years",qua:"BCA",ex:"2 years" },
    { Img: 'https://ak6.picdn.net/shutterstock/videos/15686326/thumb/1.jpg?ip=x480', Name: 'Aditya' ,age:26,qua:"B.tech"},
    { Img: 'https://img.lovepik.com/free-png/20211110/lovepik-male-teacher-png-image_400764324_wh1200.png', Name: 'Hardin' ,age:"26 years",qua:"B.tech",ex:"4 years"},
    { Img: 'https://media.istockphoto.com/photos/adult-teacher-posing-on-blackboard-picture-id1089058072?k=20&m=1089058072&s=612x612&w=0&h=BS7SqLmsOf5LwLh2xPvXVFcHnLI1mSiWtemugtM7b0I=', Name: 'Anderson',age:"26 years",qua:"MCA",ex: "3 years"}]



    const [nm, setnm] = useState()
  const [img, setimg] = useState()
  const [age, setage] = useState()
  const [qua, setqua] = useState()
  const [ex, setex] = useState()

  function getcrs(x) {
    console.log(x)
    setnm(x.Name)
    setimg(x.Img)
    setage(x.age)
    setqua(x.qua)
    setex(x.ex)
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

    return (

        <>
            <Navbar />

            <div  className="team" data-aos="fade-down-left" data-aos-delay="150">
                {
                    menu.map((v) => (

                        <div data-toggle="modal" data-target="#id8" className=' col-md-3 col-sm-4 col-xs-12 f-fmly ' style={{ marginBottom: 30, cursor: 'pointer' }} onClick={() => getcrs(v)} >
                            <div className='abc' style={{ borderRadius: '5px', height: 300, display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 30 }}>
                                <img src={v.Img} className='img-responsive' style={{boxShadow:"2px 2px grey",border:'1px solid grey', height: 200, width: 180 }} />
                                <h3>{v.Name}</h3>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div class="col-xs-3">

<div class="modal fade" id="id8">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title">
          <button class="close" data-dismiss="modal">x</button>
          <h4 style={{textAlign:"center" ,fontWeight:"bold",fontStyle:"oblique",fontSize:20}}>{nm}</h4>
        </div>
        <div class="modal-body" style={{display:'flex', justifyContent:'space-around'}}>
          <div>
          <img src={img} height={150} style={{borderRadius:40}} />
          <h4> Age:{age}</h4>
                  <h4> Qualification:{qua}</h4>
                  <h4> Experience:{ex}</h4>
          </div>
          
        </div>
        </div>
       </div>
</div>
</div>
</div>
          


        </>
    )
}