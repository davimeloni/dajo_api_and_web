var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var User = require('../models/user');

module.exports.createCustomer = function (req, res) {
  console.log(req.body);

  User.findOne({ 'OauthId': req.body.OauthId }, function (err, user) {
    if (err) return done(err);
    if (user) {
      console.log('pegando um user ja existente');
      console.log(user)
      res.json(user);
      return;
    } else {
      var newUser = new User(req.body);

      newUser.save(function (err, newuser) {
        if (err) throw err;
        console.log(newuser);
        console.log('criando um novo user');
        res.json(newuser)
        return;
      })
    }
  })
}

module.exports.getUserByEmail = function (req, res) {
  console.log(req.params.email);
  var email = req.params.email;
  User.findOne({ "email": email }, function (err, user) {
    if (err) throw err;
    res.json(user);
  })
}