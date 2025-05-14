const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const JWT = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide name'],
        minLength:2,
        maxLength:40,
    },

    lastName:{
        type:String,
        required:[true, 'Please provide last name'],
        minLength:2,
        maxLength:40,
    },

    email:{
        type:String,
        required:[true, 'Please provide email'],
        match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,'Please provide valid email'],
        unique:true,
    },

    password:{
       type:String,
       required:[true, 'Please provide password'],
       minLength:5, 
    }
})

UserSchema.pre('save', async function(){
    if(!this.isModified('password')) return;
    const addSalt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, addSalt)
})

UserSchema.methods.generateToken = function(){
     
    return JWT.sign({regUserID:this._id,regUserName:this.name},process.env.JWT_SECRET,{expiresIn:process.env.JWT_DURATION})

   
}

UserSchema.methods.validatePassword = async function (userPassword){
    const matchPassword = await bcrypt.compare(userPassword, this.password)

    return matchPassword 
}

module.exports = mongoose.model('User', UserSchema)