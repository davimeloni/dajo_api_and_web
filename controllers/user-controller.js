var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var User = require('../models/user');

module.exports.createCustomer = function (req, res) {
  console.log(req.body);

  User.findOne({ 'OauthId': req.body.OauthId }, function (err, user) {
    if (err) return done(err);
    if (user) {
      console.log('getting existing user');
      console.log(user)
      res.json(user);
      return;
    } else {
      var newUser = new User(req.body);

      newUser.save(function (err, newuser) {
        if (err) throw err;
        console.log(newuser);
        console.log('creating new user');
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

// later functions

module.exports.getUserById = function (id, callback) {
  User.findById(id, function(err, user) {
    if (err) throw err;
    res.json(user);
  });
}

module.exports.getUserByUsername = function (username, callback) {
  const query = { username: username }
  User.findOne(query, callback);
}


module.exports.addUser = function (newUser, callback) {
  newUser.save(callback);
}
module.exports.comparePassword = function (password, userPassword, callback) {
    var isMatch = false;
    if(password === userPassword) {
      isMatch = true;
    }
    if (err) throw err;
    callback(null, isMatch);
}