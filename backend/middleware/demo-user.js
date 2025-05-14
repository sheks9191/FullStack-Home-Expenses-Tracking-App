const { BadRequestError} = require('../errors');

const demoUser = (req, res,next) => {
    if(req.user.demoUser) {
        throw new BadRequestError('Demo User. Ready Only')
    }
    next();
}

module.exports = demoUser;

