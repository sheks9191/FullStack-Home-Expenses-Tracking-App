const User = require('../models/User')
const {StatusCodes} = require('http-status-codes')
const {BadRequestError,UnauthenticatedError} = require('../errors')



const registerUser = async (req, res) => {

    const regUser = await User.create({...req.body})

   const regUserToken = regUser.generateToken()

    res.status(StatusCodes.CREATED).json({regUser:{name:regUser.name,email:regUser.email,lastName:regUser.lastName},regUserToken})
}

const loginUser = async (req, res) => {
    const {email, password} = req.body

    if(!email || !password){
       throw new BadRequestError('Please provide login details') 
    
    }

    const loginUser = await User.findOne({email})
    
    if(!loginUser){
        throw new UnauthenticatedError('Invalid Credentials')
    }

    const validPassword = await loginUser.validatePassword(password)
    
    
    if(!validPassword){
        throw new UnauthenticatedError('Invalid Credentials')
    }


    const loginUserToken = loginUser.generateToken();

    res.status(StatusCodes.OK).json({loginUser:{name:loginUser.name,email:loginUser.email,lastName:loginUser.lastName},loginUserToken})

}

const updateUser = async (req,res) => {
 const {body:{name,lastName,email},user:{userID}} = req

 if(!name || !lastName || !email){
    throw new BadRequestError('Please provide all details')
 }

 const updatedUser = await User.findOneAndUpdate({_id:userID} ,req.body, {new:true,runValidators:true})

const loginUserToken = updatedUser.generateToken();
 
 res.status(StatusCodes.OK).json({loginUser:{name:updatedUser.name,email:updatedUser.email,lastName:updatedUser.lastName},loginUserToken})
 
}




module.exports = {
    registerUser,
    loginUser,
    updateUser
} 