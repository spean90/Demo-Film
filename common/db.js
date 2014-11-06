/**
 * Created by Administrator on 2014/11/5.
 */
var format = require('util').format;
var mongoose = require('mongoose');
var url = format("mongodb://%s:%s@localhost:27017/film",'hsp','hsp');
var options = {
    db: { native_parser: true },
    server: { poolSize: 10 }
    //user: 'hsp',
    //pass: 'hsp'
}
mongoose.connect(url,options);

module.exports = mongoose;