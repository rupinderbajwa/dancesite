const express=require("express");
const path=require("path");
const app=express();
const mongoose = require('mongoose');
const bodyparser=require("body-parser");
mongoose.connect('mongodb://localhost:27017/contactdance',{useNewUrlParser:true,useUnifiedTopology:true});

const port=8000;
var contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    address: String,
    desc: String

  });
  const contact = mongoose.model('contact', contactSchema);
app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));
app.get('/',(req,res)=>{
    const params={};
    res.status(200).render('home.pug',params);
});

app.get('/contact',(req,res)=>{
    const params={};
    res.status(200).render('contact.pug',params);
});
app.post('/contact',(req,res)=>{
    var myData= new contact(req.body);
    myData.save().then(()=>{
res.status(200).send("your data has be saved");
    }).catch(()=>{
        res.status(400).send("data is not saved");
    })

})

app.listen(port,()=>{
    console.log(`port is sucessful run ${port}`);
});
