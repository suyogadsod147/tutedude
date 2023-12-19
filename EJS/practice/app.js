const express = require('express');
const bodyParser = require('body-parser');


var app = express();
app.set('view engine', "ejs");
var dayText = ""

app.get('/', function(req, res){
    var d = new Date();
    var day = d.getDay();
   if(day==6||day==0)dayText="Weekends"
   else dayText="Weekdays"

   res.render("list",{dayejs:dayText})
})

app.listen(3000 , function(){
    console.log("Server is running on port 3000");
});