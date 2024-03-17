// Basic Library Import
const express = require("express");
const router = require("./src/routes/api");
const app = new express();
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");


// CORS Implementation
app.use(cors());

// Security Implementation
app.use(helmet());
app.use(hpp());
app.use(express.json({limit: "20mb"}));
app.use(express.urlencoded({extended: true}));

let limiter = rateLimit({windowMs: 15*60*1000, max: 3000});
app.use(limiter);

// MongoDB Database connection
const URL = "mongodb://localhost:27017/task_manager";
const OPTION = {user:"", pass: "", autoIndex: true}
mongoose.connect(URL, OPTION).then((res)=> {
    console.log("Database is connected");
}).catch((err)=> {
    console.log(err);
})

// Route Implementation
app.use('./api', router);


// 404 Implementation
app.use("*", (req,res)=> {
    res.status(404).json({data: "Not Found"});
});


module.exports = app;












