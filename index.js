//Imporing packages after downloading them using npm installer on cmd/terminal

const express = require("express");
const ejs = require("ejs");


const app = express();
app.set("view engine" , "ejs");

app.use(express.static("public")); // a public folder to store css, images, create it manually after running the code if didn't get created with another new folder views.
/*
Your code goes here to get data from firebase to  adding to the array
*/

var yourArray = ["element 1","element2"];
var text = "hi";

app.get("/" , function(req,res){
    res.render("home", {yourArray:yourArray})
})

app.listen("3000", function(){
    console.log("Server set-up and running on port 3000");
    
})