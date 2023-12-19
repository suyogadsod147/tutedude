const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
var app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


mongoose.connect('mongodb://127.0.0.1:27017/todo')

const trySchema = new mongoose.Schema({ name: String });
const item = mongoose.model("task", trySchema);
const todo = new item({name : "Create some videos"})
const todo1 = new item({name : "Create some videos"})
const todo2 = new item({name : "Create some videos"})
const todo3 = new item({name : "Create 3 videos"})
const todo4 = new item({name : "Create 4 videos"})
// todo.save()
// todo1.save()
// todo4.save()

// app.get('/', (req , res)=>{
//     item.find({},function(err , foundedItem){
//         if(err){
//             console.log(err)
//         }
//         else{
//             res.render('list',{ejes: foundedItem});
//         }
//     })
// })

app.get('/', async (req, res) => {
    try {
        const foundedItem = await item.find({}).exec();
        res.render('list', { ejes: foundedItem });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/', async (req, res) => {
    const itemName = req.body.ele1
    const todo8 = new item({name: itemName})
    todo8.save()
    res.redirect("/")
})

// app.post('/delete', async (req, res) => {
//     const checked = req.body.checkbox1;
//     item.findByIdAndDelete(checked , function(err){
//         if( !err){
//             console.log("deleteed")
//             res.redirect("/")
//         }
       
//     })
// })
app.post('/delete', async (req, res) => {
    try {
        const checked = req.body.checkbox1;
        const result = await item.findByIdAndDelete(checked);

        if (result) {
            console.log("Deleted");
            res.redirect("/");
        } else {
            console.log("Document not found");
            res.sendStatus(404);
        }
    } catch (err) {
        console.error("Error deleting document:", err);
        res.sendStatus(500); 
    }
});



app.listen( 3000 , () => {
    console.log("server is running at port 3000")
});


