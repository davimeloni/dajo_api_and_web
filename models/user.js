var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    displayName: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    OauthId: String,
    OauthToken: String,
    kind: {
        type: String,
        default: 'Customer'
    },
    isLogged: {
        type: Boolean
    },
    admin: {
        type: Boolean,
        default: false
    }
});

userSchema.plugin(passportLocalMongoose);

var User = mongoose.model('User', userSchema);
module.exports = User;