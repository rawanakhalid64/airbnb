const express = require("express");
const app = express();
const userRouter= require("./routes/user.route")
const reviewsRouter = require("./routes/review.route");
const placeRouter = require("./routes/place.route");


app.use(express.json());

app.use(userRouter)
app.use(reviewsRouter);
app.use(placeRouter);


const mongoose = require("mongoose");


function dbConnection(){
    // mongoose.connect("mongodb+srv://rawana:123rawana123@cluster0.z9uygyx.mongodb.net/?retryWrites=true&w=majority")
    mongoose.connect("mongodb://127.0.0.1:27017/test")
.then(()=>{
console.log("connected successfully");
}).catch((error)=>{ 
    console.log("error with connecting to database: " + error)
});
}



app.get("/findnumber", (req, res)=>{
    // console.log(req.body);
    // res.send(`the data is:${req.body.name}`);
    // res.json({name:req.body.name,age:req.query.age});
    // res.sendFile(__dirname + "/views/numbers.html")
res.render('numbers.ejs',{name:"test"}
)});

// app.get("/hi ",(req, res)=>{
//     console.log(req.body);
//     res.send(`the data is:${req.body.name}`);
//     // res.send("");
// });

// app.post("/comments", (req, res) => {

// res.send("u have added ur comment");

// });    
app.listen(3000,() => {
console.log("iam listening on port 3000");
    dbConnection()
});