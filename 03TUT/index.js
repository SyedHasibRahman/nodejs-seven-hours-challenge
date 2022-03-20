// console.log('testing!');

const { format } = require('date-fns');
// const uuid = require('uuid');
const { v4 } = require('uuid');
const { v4: uuid } = require('uuid');

console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));
console.log('Hello!');
console.log(uuid());
console.log(uuid());