



const express =require("express") 
// const res = require("express/lib/response")
const mongodb =require("mongodb")
const mongodbclient =require("mongodb").MongoClient;

const bodyParser = require("body-parser")
const methodOverride = require("method-override");
const cors = require("cors")

// initialize

const app=express()

app.use(cors())
app.use(bodyParser.json())

const connection="mongodb+srv://admin:Diksha2244@cluster0.gaxetvl.mongodb.net/?retryWrites=true&w=majority"

var login;

mongodbclient.connect(connection,(err,succ)=>{
    if(err)throw err;
    console.log("database connected")

    login=succ.db("IThub").collection("login");
    
})


app.get("/",(req,res)=>{
    res.send("abc")
})

app.get("/abc",(req,res)=>{
    res.send("page 1")
})

app.post("/register",(req,res)=>{
    console.log(req.body)
    login.findOne({
            UserName:req.body.UserName,
            Email:req.body.Email,
    }).then((succ)=>{
            res.send(succ)
    })
})


app.post("/getuser",(req,res)=>{
    console.log(req.body)
    login.findOne({
        UserName:req.body.UserName,
    }).then((succ)=>{
        res.send(succ)

    })
})


app.post("/adduser",(req,res)=>{
    login.insertOne(req.body).then((succ)=>{
            res.send(succ)
            console.log(succ)
    })
})



//creating port
app.listen(1000,(req,res)=>{
    console.log("server start")
})