const express = require("express");
const fs = require("fs");
// const { default: router } = require("./router/auth.route");
require('dotenv').config();
// console.log(`Hello ${process.env.PORT}`)
const app = express();

const authRouter = require("./router/auth.route");
const errorHandler = require("./middleware/error.middleware");
const userRouter = require("./router/user.route");
const authMiddleware = require("./middleware/auth.middleware");
const { connect } = require("http2");

const connectDb = require("./DB/mongo.db");


app.use(express.json());


//  BEfore middlewere

// app.use((req, res, next) => {
//     if(fs.existsSync("logger.json")){
//         fs.appendFileSync("logger.json", `${req.method} ${req.url} ${req.ip}\n`)
//     } else{
//         fs.readFile("logger.json", "utf8", (err) => {
//         fs.appendFileSync("logger.json", `${req.method} ${req.url} ${req.ip}\n`)
//         })
//     }
    
//     console.log(`${req.method} ${req.url} ${req.ip}`);        // simple logger
//     next();          // if you do not put this your request dose not move next . it stuch in  between
// })



app.use("/auth/", authRouter);                // parent route
app.use("/user/", authMiddleware, userRouter);

app.use(errorHandler);

connectDb()
    .then(() => {
        console.log("DB Connected")
    })
    .then(() => {

        app.listen(process.env.PORT || 5000, () => {
            console.log(`PORT STARTED ON ${process.env.PORT || 5000}`)
    })
})
    .catch((err) => {
        console.log(err);
    })



// JWT