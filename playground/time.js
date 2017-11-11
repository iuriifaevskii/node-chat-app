var moment = require('moment');

// Jan 1st 1970 00:00:00 am
//console.log(new Date().getTime());

//var date = new Date();
//console.log(date.getMonth());

var date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

// 10:35 am
var myTime = moment();
console.log(myTime.format("hh:mm a"));
// 06:01 am
myTime.subtract('4', 'hours');
console.log(myTime.format("hh:mm a"));
