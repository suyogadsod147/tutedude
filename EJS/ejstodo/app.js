const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', "ejs");
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
var items = [];

var example = "working"
app.get('/', (req, res) =>{
    res.render("list",{ejes: items})
})


app.post("/" , (req, res) =>{
    var item = req.body.ele1;
    items.push(item);
    res.redirect("/");
})




app.listen(3000 , function(){
    console.log("Server is running on port 3000");
});

