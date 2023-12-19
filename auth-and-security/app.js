const express = require('express');
const bodyParser = require('body-parser');
const encrypt = require('mongoose-encryption');
const mongoose = require('mongoose');
const ejs = require('ejs');


var app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
// const secret = "this is littlesecret";

mongoose.connect("mongodb://127.0.0.1:27017/secrets")

const userSchema = new mongoose.Schema({
    email : String,
    password : String,
});
const secret = "thisislittlesecret";
userSchema.plugin(encrypt, {secret: secret , encryptedFields: ["password"]});


const user = mongoose.model('user', userSchema);

app.get('/', function(req, res){
    res.render("home");
});

app.post('/register', function(req, res){
    const newUser = new user({
        email : req.body.username,
        password : req.body.password
    })
   
    newUser.save()
    res.render("secrets") 
})

app.post('/login',  async function(req, res){
    const email = req.body.username
    const password = req.body.password
    
    const foundUser = await user.findOne({ email: email})
    console.log(foundUser.email)
    if(foundUser){
        
        if(foundUser.password=== password){
            return res.render("secrets")
        }else{
            return res.render("login") 
        }
    }
   
});


app.get('/login', function(req, res){
    res.render("login");
});

app.get('/register', function(req, res){
    res.render("register");
});

app.listen(5000 , function(){
    console.log("Server is running on port 5000");
})