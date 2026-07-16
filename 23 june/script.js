console.log("Working")


// // simpe TimeOut
// setTimeout(() => {
//     console.log("Timeout executed");
// }, 5000);      // 1000 is 1 second


// console.log("1 \n");

// setTimeout(() => {
//     console.log("4 \n");
//     setTimeout(() => {
//         console.log("10 \n");
//     }, 2000)
// }, 5000);      // 1000 is 1 second

// console.log("2 \n")


//
// Set Interval


// setInterval(() => {                              // run every 2 seconds
//     console.log("Hello \n")                     // run every 2 seconds
// }, 2000);                                      // run every 2 seconds

// let x = 1;
// setInterval(() => {                              // run every 2 seconds
//     console.log(`Hello ${x}\n`)                     // run every 2 seconds
//     x++;
// }, 2000);                                      // run every 2 seconds

// let x = 1;
// const timer = setInterval(() => {                              // run every 2 seconds
//     console.log(`Hello ${x}\n`)                     // run every 2 seconds
//     x++;
// }, 1000);                                      // run every 2 seconds



// const stopWatch = document.getElementById("timerID")

// console.log(stopWatch);

// let x = 0;
// setInterval(() => {
//     stopWatch.innerHTML = `${x}`;
//     x++;
// }, 1000);




// // stop watch  //


// const seconds = document.getElementById("seconds")
// const minuts = document.getElementById("minuts")
// const startButton = document.getElementById("startButton")
// const stopButton = document.getElementById("stopButton")

// console.log(seconds);

// let sec = 0;
// let min = 0;
// let mili = 0;
// let currTime

// function startTimer() {

//  currTime = setInterval(() => {
//     if(sec < 60){
//         sec++;
//     }else{
//         sec = 0;
//         min++;
//     }
//     seconds.innerHTML = `${sec}`;
//     minuts.innerHTML = `${min}`;
    
// }, 1000);   

// }
// startButton.addEventListener("click", () => {
//     startTimer();
// })

// console.log(stopButton)

// stopButton.addEventListener("click", () => {
//     console.log("CLOCK")
//     clearInterval(currTime);
//     sec = 0;
//     min = 0;
//     seconds.innerHTML = `${sec}`;
//     seconds.innerHTML = `${sec}`;
// })



// 
// Promise - tells the current state

// const promise = new Promise((res, rej) => {                //any data in "res it will go in "then   and any data in "rej it will go in "catch
//     setTimeout(() => {
//         console.log("Promise resolved");
//         res("Promise rejected");
//     }, 1000);
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// });


// // -----------
// const promise = new Promise((res, rej) => {                //any data in "res it will go in "then   and any data in "rej it will go in "catch
//     setTimeout(() => {
//         console.log("Promise resolved");
//         res("Promise rejected");
//     }, 1000);
// })
// .then((data) => {
//     return data;      // it send the data to next .then case
// })
// .then((d) => {
//     console.log(d.toUpperCase());      // change the data to upper case
// })
// .catch((err) => {
//     console.log(err);
// })
// .finally(() => {                         // run every time
//     console.log("Promise Sattled");
// });

// // ---------------

// const createDough = (d) => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res("dough done");
//     }, 1000);
        
//     });

//     return promise;
// };

// const createSauce = (s) => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`Sause done by ${s}`);
//     }, 1000);
        
//     });

//     return promise;
// };

// const createChees = (c) => {
//     const promise = new Promise((res, rej) => {
//         setTimeout(() => {
//             res(`pizza done by ${c}`);
//     }, 1000);
        
//     });

//     return promise;
// };

// createDough()
//     .then((d) => {
//         console.log(d);
//         return createSauce(d); 
//     })
//     .then((s) => {
//         console.log(s);
//         return createSauce(s); 
//     })
//     .then((c) => {
//         console.log(c);
//         return createChees(c); 
//     });


// ---------------

// const apiLink = "https://jsonplaceholder.typicode.com/users";

// fetch(apiLink)
// console.log
// .then((d) => {
//     console.log(d);
//     return d.json();
// })
// .then((data) => {
//     console.log(data);
// })

const pokiLink = "https://pokeapi.co/api/v2/pokemon/Pikachu";

fetch(pokiLink)
.then((d) => {
    console.log(d);
    return d.json();
})
.then((data) => {
    console.log(data);
    console.log(data.sprites.back_female);
    
    const pokiDiv = document.getElementById("pokiDiv")
    pokiDiv.innerHTML = `

    <img src="${data.sprites.back_female}">`;
})

document.getElementById("")


