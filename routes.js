const app = require('express').Router();
const models = require('./server/db').models;


module.exports = app ;


app.get('/albums',(req,res,next)=>{
    console.log('hey album')
    models.Albums.findAll()
    .then(albums=>res.send(albums).json())
    .catch(next);
}) ;


