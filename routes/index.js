var express = require('express');
var router = express.Router();
//var fetch=require('node-fetch');
const axios=require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/submit',function(req,res){
  const city=req.query.city;
  const url_api=`https://api.openweathermap.org/data/3.0/weather?q=${city}&units=metric&appid=d56937bff6dfceab964a8a48dc822457`
  axios.get(url_api)
  .then(function (response) {
    //res.render('index',{data:response.data})
    res.send(response.data)
  })
  .catch(function(error){
    res.send(error);
  })
});
module.exports = router;
