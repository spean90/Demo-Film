/**
 * Created by Administrator on 2014/11/5.
 */
var mongoose = require('../common/db');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: String,
    password: String,
    meta:{
        createTime : {
            type : Date,
            default : Date.now()
        }
    },
    pic : Buffer
});

UserSchema.pre('save', function (next) {
    if(this.isNew){   //如果是第一次插入；
        console.log("插入一个新的用户！");
        this.meta.createTime = Date.now();
    }
    next();
});

UserSchema.statics = {
    fetch : function(cb) {
        this.find({}, cb);
    },
    findById : function(id,cb) {
        this.findOne({_id: id},cb);
    }
}

module.exports = UserSchema;