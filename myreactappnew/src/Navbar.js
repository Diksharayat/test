import axios from 'axios';

import React, { useState, useEffect, Link, useRef } from 'react';
import { useNavigate } from 'react-router-dom'
import { auth } from './Firebase';

function Navbar() {

    const [loading, setLoading] = useState(false)

    var uri = "http://localhost:1000/"


    var navi = useNavigate();

    const [id2, setid2] = useState(false)
    var uname = localStorage.getItem('Username')

    useEffect(() => {
        if (uname) {
            setid2(true)
        }
    }, [])


    function register(e) {
        setLoading(true)
        e.preventDefault()
        var d = new FormData(e.currentTarget);
        var uname = d.get("uname")
        var pass = d.get("pass")
        var email = d.get("email")
        var contact = d.get("contact")

        console.log(uname + pass + email + contact);

        var data = { UserName: uname, Password: pass , Email: email, Contact: contact }

        axios.post(uri + "register", data).then((succ) => {
            console.log(succ)
            if (succ.data.UserName != uname && succ.data.Email !=email) {
                alert("register")
                axios.post(uri + 'adduser', data).then((succ) => {
                    console.log("user registered")
                    alert("now you can login")
                })
            } else {
                alert("This name is already registered please change your name e.g John12 ")
                navi("/")
            }
        }).then(()=>{
            setLoading(false)
        })

    }

    function login(e) {
        setLoading(true)
        e.preventDefault()

        var d = new FormData(e.currentTarget);
        var uname = d.get("uname")
        var pass = d.get("pass")

        var data = { UserName: uname, Password: pass }

        axios.post(uri + "getuser", data).then((succ) => {
            console.log(succ)
            if (succ.data.UserName != uname) {
                alert("register first")
                navi("/")
            } else {
                alert("login successful")
                localStorage.setItem("Username", succ.data.UserName)
                setid2(true)
                navi("/")
            }
            e.target.reset()
        }).then(()=>{
            setLoading(false)
        })

    }



    function logout() {
        localStorage.removeItem("Username")
        setid2(false)
    }


    function cources() {
        navi("/Services")
    }




    return (

        <div id='Navbar'>
            <nav className="  navbar navbar-inverse">
                <div className="container d-flex align-items-center justify-content-lg-between myHeader">
                    <div className="navbar-header menu ">
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" herf="/"><i className="fa-solid fa-laptop"></i> &nbsp;IT Hub</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav ">
                            <li><a href="/">Home</a></li>
                            <li><a href="/About">About</a></li>
                            <li class=" dropdown ">
                                <a href="" class="dropdown-toggle" data-toggle="dropdown" >Courses</a>
                                <div class=" dropdown-menu">
                                    <a href="" class=" nav-item dropdown-item" onClick={cources}>Data Structures</a>
                                    <br />
                                    <a href="" class="nav-item dropdown-item" onClick={cources}>Web Development</a>
                                    <br />
                                    <a href="" class="dropdown-item" onClick={cources}>Data Science</a>

                                    <br />
                                    <a href="" class="dropdown-item" onClick={cources}>Python</a>
                                    <br />
                                    <a href="" class="dropdown-item" onClick={cources}>C, C++</a>
                                    <br />
                                    <a href="" class="dropdown-item" onClick={cources}>Php</a>
                                </div>
                            </li>

                            <li><a href="/Team">Team</a></li>
                            <li><a href="/Contact">Contact</a></li>
                            <li><a href="/MyCources">MyCourses</a></li>
                        </ul>


                        <ul className="nav navbar-nav navbar-right">

                            {/* <li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li> */}
                            {id2 ? (
                                <li>
                                   <button className="btn btn-default navbar-btn" style={{ fontWeight: 'normal', color: 'white',marginRight:10,background:'none',border:'none',outline:'none' }} data-toggle="modal" data-target="#id2" onClick={logout}>
                                   <span className=' glyphicon glyphicon-user'></span>Logout</button>
                                </li>
                            ) : (
                                <>
                                    <button className="btn btn-default navbar-btn" style={{ fontWeight: 'normal', color: 'white',marginRight:10,background:'none',border:'none',outline:'none' }} data-toggle="modal" data-target="#id2"><span className=' glyphicon glyphicon-user'></span> &nbsp;Signup</button>

                                    <button  style={{ fontWeight: 'normal', color: 'white' ,background:'none',border:'none',outline:'none'}} className="btn navbar-btn btn-default" data-toggle="modal" data-target="#id3"><span className=' glyphicon glyphicon-log-in'></span> &nbsp;Login</button>
                                </>
                            )}

                        </ul>
                    </div>

                </div>
            </nav>

            <div className="modal fade" id="id2">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <button className="close" data-dismiss="modal">x</button>
                                <h3 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "cursive" }}>Signup</h3>
                            </div>
                            <div className="modal-body">
                                
                                    <form onSubmit={register}>
                                    <div className="  form-group">
                                        Name:<input name='uname' type="text" autoComplete='off' className="form-control" placeholder="username" required/>
                                    </div>
                                        <div className="form-group">
                                            Password: <input  name='pass' type="password" className="form-control" placeholder="password" required/>
                                        
                                        </div>
                                        <div className="form-group">
                                            Email: <input  name='email' autoComplete='off' type="email" className="form-control" placeholder="email" required />
                                        </div>
                                        <div className="form-group">
                                            Contact: <input name='contact' type="contact" className="form-control" placeholder="contact" required />
                                        </div>


                                        <div className="form-group">
                                            <input style={{borderRadius:50}} className="btn btn-primary" value={!loading ? 'Sign up' : "Loading..."} type="submit" />
                                        </div>

                                    </form>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="id3">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                <button  className="close" data-dismiss="modal">x</button>
                                <h3 style={{ textAlign: "center", fontWeight: "bold", fontFamily: "cursive" }}>Login</h3>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={login} >
                                    <div className="form-group">
                                        Name:<input name='uname' type="text" className="form-control" placeholder="username" />
                                    </div>
                                    <div className="form-group">
                                        Password:<input name='pass' type="password" className="form-control" placeholder="passwword" />
                                    </div>
                                    <div className="form-group">
                                        <input  style={{borderRadius:50}} className="btn btn-primary" value={'login'} type="submit" />
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>

            <script src="https://kit.fontawesome.com/891d2fe5dc.js" crossorigin="anonymous"></script>

        </div>





    )
}

export default Navbar