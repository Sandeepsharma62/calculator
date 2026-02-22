// let input = document.getElementById('inputbox');
// let buttons = document.querySelectorAll
// ('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//   button.addEventListener('click', (e) =>{
//     if(e.target.innerHTML == '='){
//       string = eval(string);
//       input.value = string;
//     }

//     string += e.target.innerHTML;
//     input.value = string;
//   })

// })

let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
  button.addEventListener('click', (e) => {

    let value = e.target.innerHTML;

    // Equal button
    if (value == '=') {
      try {
        string = eval(string);
        input.value = string;
      } catch {
        input.value = "Error";
        string = "";
      }
    }

    // AC button
    else if (value == 'AC') {
      string = "";
      input.value = string;
    }

    // DEL button
    else if (value == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    }

    // Other buttons
    else {
      string += value;
      input.value = string;
    }

  });
});