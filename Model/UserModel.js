const mongoose=require('mongoose');

const UserSchema=mongoose.Schema({
    name:{
        type:String,

    },
    Email:{
        type:String,
    },
    password:{
        type:String,

    },
    confirmpassword:{
        type:String,
    },
});

const UserModel=mongoose.model('User',UserSchema);
module.exports={UserModel};