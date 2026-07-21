const arr = require("../storage/storage");
const { statusCodes, errMessage } = require("../utils/utils");
const jwt = require("jsonwebtoken");
const User = require("../model/user.schema")
const bcrypt = require('bcrypt');

const authLogin = (req, res, next) => {
  
  
  try {
    
    const { username, password } = req.body;

    const isUserValid = arr.find(
      (item) => item.username === username && item.password === password
    );

    console.log(username, password, isUserValid);

    if (isUserValid) {
      const token = jwt.sign(         // inBuilt method
        {
          id: isUserValid.id,                 //encrepting with key      // id is genrated by date.now in signup
          username: isUserValid.username,    //encrepting with key
        },
        process.env.JWT_SECREAT,            // KEY
        {
          expiresIn: "1h",              // time
        },
      );

      res.status(statusCodes.SUCCESS).json({
        status: "SUCCESS",
        message: "LOGIN Successfull",
        token,
      });
    }

    res.status(statusCodes.LOGIN).json({
      status: "SUCCESS",
      message: "LOGIN FAILED",
      token,
    });
  } catch (err) {
    const error = new Error(err);
    error.status = statusCodes.DEFAULT;
    error.message = errMessage.LOGIN;
    next(error);
  }
};

const authSignUp = async (req, res, next) => {
  try {

console.log(arr);
  
    let {name, email, mobil, age, city, isActive, password} = req.body;

    console.log(req.body);

    const existingUser = await User.findOne({ email });
    if(existingUser){
      // throw new Error("User alredy exists"); // custom Error Check --
      return res.status(409).json({
        status: "ERROR",
        message: "User already exists",
      })
    }
  
    const username = name;
    // const password = email;

    const hashpass = await bcrypt.hash(password, 10);
    password = hashpass

    User.create({
      name,
      email,
      mobil,
      age,
      city,
      isActive,
      password,
    })


    // console.log(arr);
    // const { username, password } = req.body; // destructring - fetching data from body and making as variable
    // console.log(username, password);
    const obj = {
      id: Date.now(),
      username,
      password,
    };

    arr.push(obj);
    res.status(201).json({
      status: "SUCCESS",
      message: "user created successfully",
    });

    // console.log("hello from signup");
  } catch (err) {
    const error = new Error(err);
    error.status = statusCodes.DEFAULT;
    error.message = errMessage.SIGNUP;
    next(error);
  }
};

// const authLogin = (req, res) => {
//   const { username, password } = req.body;
//   const userData = arr.find(
//     (item) => item.username == username && item.password == password,
//   );

//   console.log(userData);

//   if (userData.username === username && userData.password === password) {
//     res.status(200).json({
//       status: "success",
//       message: "Usser login",
//     });
//   } else {
//     res.json("Username of Password is wrong");
//   }
// };

const authError = (req, res) => {
  res.json("Error Page");
};

module.exports = {
  authSignUp,
  authError,
  authLogin,
};
