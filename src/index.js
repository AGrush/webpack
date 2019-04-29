// //ES2015 syntax
// import sum from './sum';

// //because the code just runs we can import like this
// import './image_viewer'


// //commonJS (node system)
// //const sum = require('./sum.js')


// const total = sum(10, 5);
// console.log(total);

//CODE SPLITTING use System.import
const button =document.createElement('button');
button.innerText = 'Click me';
button.onclick = () => {
  System.import('./image_viewer').then(module => {
    module.default();
  })
};

document.body.appendChild(button);