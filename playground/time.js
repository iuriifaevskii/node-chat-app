var moment = require('moment');

// Jan 1st 1970 00:00:00 am
//console.log(new Date().getTime());

//var date = new Date();
//console.log(date.getMonth());

//1.
var date = moment();
date.add(100, 'year').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

//2.

// 10:35 am
var myTime = moment();
console.log(myTime.format("hh:mm a"));
// 06:01 am
myTime.subtract('4', 'hours');
console.log(myTime.format("hh:mm a"));

//3.
new Date().getTime();
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var myDate = moment(createdAt);
console.log(myDate.format('h:mm a'));