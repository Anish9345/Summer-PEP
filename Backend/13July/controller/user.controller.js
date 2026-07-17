// const userHome = (req, res) => {
//     res.json("User Home Page");
// }

const User = require("../model/user.schema");

const userHome = async (req, res) => {
    const userData = User.find().limit(10);
    res.json({
        status: "Success",
        data: userData
    });
}


module.exports = {
    userHome
}