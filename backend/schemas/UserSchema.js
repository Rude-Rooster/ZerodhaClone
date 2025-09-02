const {Schema} = require("mongoose");
import { v4 as uuidv4 } from "uuid";

const UserSchema = new Schema({
  
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type:String,
    required:true,
  }
});
module.exports = {UserSchema};
