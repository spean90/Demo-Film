/**
 * Created by Administrator on 2014/11/5.
 */
var mongoose = require('../common/db');
var Schema = require('../schema/UserSchema');

var user = mongoose.model('user',Schema);

module.exports = user;