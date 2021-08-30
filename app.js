// IMPORTING NECESSARY MODULES AND MAKING VARIABLES
const path = require("path");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 80;
const hostname = '127.0.0.1';

// EXPRESS SPECIFIC STUFF
app.use('/static',express.static('static'));
app.use(express.urlencoded());
app.set('views',path.join(__dirname, 'views'));

// ENDPOINTS
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname + '/views/index.html'));
});
app.get('/class11',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/class11index.html'))
});
app.get('/class12',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/class12.html'))
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/about.html'))
});
app.get('/11ch1',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy101.pdf'))
});
app.get('/11ch2',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy102.pdf'))
});
app.get('/11ch3',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy103.pdf'))
});
app.get('/11ch4',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy104.pdf'))
});
app.get('/11ch5',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy105.pdf'))
});
app.get('/11ch6',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy106.pdf'))
});
app.get('/11ch7',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy107.pdf'))
});
app.get('/11ch8',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy108.pdf'))
});
app.get('/11ch9',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/Class-11/kepy109.pdf'))
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname+'/views/about.html'))
});
// STARTING THE SERVER
app.listen(port,()=>{
    console.log(`Server starting at http://${hostname}:${port}/`);
})