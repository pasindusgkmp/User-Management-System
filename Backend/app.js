//uU8dP9MjEdSYJxaQ

const express = require('express');
const mongoose = require('mongoose');
const router = require("./Route/UserRoute");

const app = express();

//Middlewares
app.use(express.json());
app.use("/users", router);


mongoose.connect("mongodb+srv://pasindugunasekara889:uU8dP9MjEdSYJxaQ@cluster1.diqrujx.mongodb.net/")
.then(()=> console.log("Connected to Database"))
.then(()=>{
    app.listen(5000);
})
.catch((err) => console.log((err)));


