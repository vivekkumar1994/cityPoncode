const express=require('express');
const cors = require("cors");

const app=express();
app.use(cors());
const port = process.env.PORT || 3000;

const apiData = require("./data.json");



require('dotenv').config();

app.get("/",(req,res) =>{
    res.send("i am live");

});
app.get("/service",(req,res) =>{
    res.send(apiData);

});

app.listen(port,() => {
    console.log(`server running ${port}`);
})