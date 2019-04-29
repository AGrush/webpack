//ES2015 syntax
import sum from './sum';

//because the code just runs we can import like this
import './image_viewer'


//commonJS (node system)
//const sum = require('./sum.js')


const total = sum(10, 5);
console.log(total);