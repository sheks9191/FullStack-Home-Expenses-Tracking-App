
const User = require('../models/User')
const JWT = require('jsonwebtoken')
const {UnauthenticatedError} = require('../errors')



const authenticate = async (req,res,next) => {

    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Invalid authentication')
    }

    const token = authHeader.split(' ')[1]

    try {
        const payload = JWT.verify(token, process.env.JWT_SECRET)

        const demoUser = payload.regUserID === '67458098e51e126b3c51f2f4'

        req.user = {userID:payload.regUserID, demoUser}
        next()
    } catch (error) {
       throw new UnauthenticatedError('Invalid authentication')
        
    }
}



module.exports = authenticate