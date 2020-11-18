const express = require('express');
const ip = require('ip'); // ip : ip get, equ, avail
const moment = require('moment'); // date, avail

const router = express.Router();



/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res) => {
  let data = [];

  data['test'] = 'test';
  data['msg'] = 'hello, test!';

  res.render('test', data);
})

module.exports = router;
