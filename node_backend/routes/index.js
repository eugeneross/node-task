var express = require('express');
var router = express.Router();
var request = require('request');
const url = 'https://api.github.com/repos/'

/* GET home page. */
router.get('/', function(req, response, next) {
  let owner = '/nodejs'
  let repo = '/node-v0.x-archive'
  let request_for = '/commits'
  var options = {
    host: 'api.github.com',
    path: '/repos' + owner + repo + request_for,
    method: 'GET',
    headers: {'user-agent': 'node.js'}
    };
    var data = ''
  require('https').get(options , (res) => {
    res.setEncoding('utf8');
    res.on('data', function (body) {
        console.log(body);
       data = body;
    });
    res.on('end', function (body) {
      console.log(data[3])
    response.render('index', { title: data });
    })
  });
  // res.render('index', { title: data });
});

module.exports = router;
