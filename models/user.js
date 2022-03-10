const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  contact:{
    type:Number,
    required:true
  },
  age:{
    type:Number,
    validate:num=>num>18
  },
  join_date:{
    type:Date,
    default:Date.now()
  },
  is_developer:{
    type:Boolean,
    default:false
  }
})

const User = mongoose.model('users',userSchema);
module.exports = User;