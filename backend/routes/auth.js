const express = require('express')
const router = express.Router()
const authenticate = require('../middleware/authentication')
const demoUser = require('../middleware/demo-user')

const rateLimiter = require('express-rate-limit')

const loginLimiter = rateLimiter({
    windowMs: 5 * 60 * 1000,
    max:10,
    message: {
        msg:'IP requests limit exceeded, please try again after 5 minutes',
    }
});

const {registerUser,loginUser,updateUser} = require('../controllers/auth')

router.route('/register').post(loginLimiter,registerUser);
router.route('/login').post(loginLimiter,loginUser);
router.patch('/update-user', authenticate, demoUser,updateUser);




module.exports = router 