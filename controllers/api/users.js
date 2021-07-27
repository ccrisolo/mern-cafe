const User = require("../../models/user");
const jwt = require("jsonwebtoken");

module.exports = {
    create,
};

async function create(req, res) {
    try {
        //add user to the database
        const user = await User.create(req.body);
        //create a token with the helperr function
        //token will be a string
        const token = createJWT(user);
        //yes we can use res.json to send back just a string
        //the client code takes this into consideration
        res.json(token);
    } catch (err) {
        //Client will check for non-2xx status code
        //400 = Bad Request
        res.status(400).json(err);
    }
}

//helper functions

function createJWT(user) {
    return jwt.sign(
        //data payload
        { user },
        process.env.SECRET,
        { expiresIn: "24h" }
    );
}
