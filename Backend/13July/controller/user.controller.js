// const userHome = (req, res) => {
//     res.json("User Home Page");
// }

const User = require("../model/user.schema");

const userHome = async (req, res) => {
    const userData = await User.find().limit(10);
    
    console.log(userData);
    res.json({
        status: "Success",
        data: userData
    });
}


module.exports = {
    userHome
}