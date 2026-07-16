// Debounce
// Throttle


console.log("Hello world");

// type Script


//        //
const btn2 = document.getElementById('btn2');
const panel2 = document.getElementById('panel2');

btn2.addEventListener('click', () => {                                                  // try key log -try
  // Check the inline style of the ID directly
  if (panel2.style.display === 'block') {          // block means show the content
    console.log("hide")
    panel2.style.display = 'none';                 // hide
  } else {
    console.log("Show");
    panel2.style.display = 'block'; 
  }
});
