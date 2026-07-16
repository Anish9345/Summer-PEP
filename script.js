console.log("Hello")


const htmlDivElement = document.getElementById("root");
console.log(htmlDivElement);

const htmlButtonElement = document.getElementById("myButton");
console.log(htmlButtonElement);

let x = {
    x : 0,
    toString: function(){
        return this.x++;
    }
}

if(x == 0 && x == 1 && x == 2){
    console.log("All conditions met");
}else{
    console.log("Conditions not met");
}

// console.dir(htmlButtonElement);

// function changeShape(n){
//     if(n == 1){
//         htmlDivElement.style.borderRadius = "0%";
//     } else {
//         htmlDivElement.style.borderRadius = "100%";
//     }
// }

// const changeShape = () => {

// }

console.log(Math.random());

htmlButtonElement.addEventListener("click", () =>{
    console.log("Button was clicked");
    htmlDivElement.style.backgroundColor="red";
    // console.log(Math.random());

    const red = Math.random() * 255;  // to set upper limit
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    // console.log(red ,"\n");
    // console.log(green, "\n");
    // console.log(blue, "\n");

    htmlDivElement.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`  // Template literal `${variable}`  - ` ` - use to write js and html in same line

    // htmlDivElement.style.borderBlockWidth = `${red}px`;        // my
    // htmlDivElement.style.borderRadius = `${red}px`;             // my

    const randomNum = Math.random() * 2;
    // changeShape(randomNum);



});


// <!-- 
// 2 == "2"    true
// 2 === "2"   false it check the type also
// -->


// A JavaScript object with a nested address object
// const emp = [
// {
//   id: 1,
//   name: "bob",
//   age: 21,
//   val: 19,
//   address: {
//     street: "123 Main Street",
//     city: "New York",
//     state: "NY",
//     zipCode: "10001",
//     coordinates: {         // You can even nest deeper if needed!
//       lat: 40.7128,
//       lng: -74.0060
//     }
//   }
// }
// ,
// {
//   id: 2,
//   name: "tob",
//   age: 17,
//   val: 10,
//   address: {
//     street: "123 Main Street",
//     city: "New York",
//     state: "NY",
//     zipCode: "10001",
//     coordinates: {         // You can even nest deeper if needed!
//       lat: 40.7128,
//       lng: -74.0060
//     }
//   }
// }
// ];

// for(let i=0; i<emp.length; i++){
//  console.log(emp[i]?.address?.city);
// }

// emp.forEach((e, i, arr) =>{
//     console.log(e);
// })


// const ageArr = emp.map((emp, idx, age) => {

// const ageArr = emp.filter((emp, idx, age) => {    
//     // if(ele.age > 18){
//         return emp.age >18;
//     // }
//     // return
// });

// console.log(ageArr);


// event loop //

//
// API


// sir git

const emp = [
  {
    id: 1,
    age: 30,
    val: 10,
    name: "Alice",
    address: {
      city: "New York",
      country: "USA",
    },
  },
  {
    id: 2,
    age: 15,
    val: 10,
    name: "Bob",
    address: {
      city: "London",
      country: "UK",
    },
  },
  {
    id: 3,
    age: 25,
    val: 10,
    name: "Charlie",
    address: {
      city: "London",
      country: "UK",
    },
  },
];

// for(let i = 0; i < emp.length; i++){
//     console.log(emp[i]?.address?.country);
// }

// HOF - Higher Order Functions
// forEach , Map , Filter, Reduce,

// emp.forEach((e, i, arr) => {
//     console.log(e);
// });

// const ageArr = emp.filter((ele, idx, arr) => {
//   return ele.age > 18;
// });

// const doubleArr = emp.map((ele, idx, arr) => {
//   ele.val = ele.val * 2;
//   return ele;
// });

// console.log(ageArr);
// console.log(doubleArr);

const apiLink = "https://jsonplaceholder.typicode.com/users";
// const apiLink = "https://jsonplaceholder.typicode.com/photos"

console.log("Before fetching data");

async function fetchData(apiLink) {
  console.log("feronth");
  const data = await fetch(apiLink);
  const arr = await data.json();

  const container = document.getElementById("container");
  arr.forEach((ele) => {                            // ele point to each index
    const div = document.createElement("div");        // create a dive element
    div.style.border = "1px solid black";       
    div.style.padding = "10px";
    div.style.margin = "10px";

    div.innerHTML = `
    <p>${ele.name}</p>
      <p>${ele.email}</p>
      <p>${ele.address.city}, ${ele.address.country}</p>

    `;

    container.appendChild(div);     //push in div
  });
}

fetchData(apiLink);

console.log("After data");

// 
// set Time out


