const jwt = require('jsonwebtoken');
const APP_SECRET = 'Learning GraphQL';

function getUserId(context){
    const Authentication = context.request.get('Authorization'); // check request headers for authorization
    if (Authentication){ // if auth header provided, set token to provided token from request
        const token = Authentication.replace('Bearer ', '');
        const { userId } = jwt.verify(token, APP_SECRET); // verify provided token
        return userId;
    }

    // if auth header does not contain matching token, throw auth error
    throw new Error('Not authenticated');
};

module.exports = {
    APP_SECRET,
    getUserId
};