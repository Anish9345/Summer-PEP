// const express = require("express"); // Common JS
// //  import express from "express"; - for Module JS
// const nanoid = require("nanoid");


// let arr = [
//   {
//     id: 1,
//     name: "Alice",
//     age: 25,
//   },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 28 },
// ];

// const map = new Map();

// const app = express();
// // 
// app.use(express.json());        //
// // 
// app.get("/test", (req, res) => {
//   res.status(200).send("Hello world from EXPRESS");
// });

// app.get("/data", (req, res) => {
//   res.status(200).send({
//     data: arr,
//     status: "success"
//   });
// })

// app.get("/getuser/:id", (req, res) => {
//   // console.log(req);
//   // const id = Number(req.params.id);

//   // const data = arr.find(idx => idx.id === id)

//   // res.status(200).json({
//   //   status: "success",
//   //   data: data ? data: "Not found"
//   // })

//   // console.log(data ? data: "Not found");
// })


// app.get("/userdetail", (req, res) => {


//   // console.log(req.query.id);

//   //  const id = Number(req.query.id);

//   // const data = arr.find(idx => idx.id === id)

//   // res.status(200).json({
//   //   status: "success",
//   //   data: data ? data: "Not found"
//   // })


//   // http://localhost:5000/userdetail?id=2&name=Bob&age=30
// })


// // app.get("/delete", (req, res) => {

  
// // })

// // PUT
// app.put("/updatedata/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const {name, age} = req.query;

//   console.log(name);

//   arr.map(idx => {
//     if(idx.id === id) {
//       idx.name = name;
//       idx.age = age;

//     }
//   })
  
//   res.status(202).json({
//     status: "success",
//     data: arr
//   })
  
//   console.log(id, name, age);
//   // http://localhost:5000/updatedata/2?name=ankush&age=35
// })

// app.delete("/updatedelete/:id", (req, res) => {
//   const id = Number(req.params.id);
//   // const {name, age} = req.query;

//   // console.log(name);
// // 
//   arr = arr.filter(item => item.id !== id);
  

//   res.status(202).json({
//     status: "success",
//     data: arr
//   })

//   // console.log(id, name, age);
//   // http://localhost:5000/updatedata/2?name=ankush&age=35
// })


// app.post("/adduser", (req, res) => {

//   console.log(req.body);
  
//   const newId = Date.now();

//   const url  = req.body;

//   map.set(Date.now(), url);

//   console.log(map);

//   console.log(url);
//   const obj = {
//     id: Date.now(),
//     name: req.body.name,
//     age: req.body.age 
//   }


//   arr.push(obj);

//   res.status(202).json({
//     status: "success1",
//     // data: arr,
//     url : newId
//   })
// })




// app.get("/getapi", (req, res) => {


//   res.status(202).json({
//     status: "success"
//   })
// })


// app.listen(5000, () => {
//   console.log(
//     "%cServer is running on port number 5000",
//     "color: red; font-weight: bold;",
//   );
// });


// // create a simple get route with the help url shortner
// // you will pass link in route
// //key value pair

// // middile class


