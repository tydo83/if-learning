/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function isItLong(str) {
  if(str.length > 20) {
    return 'That\'s a long string!';
  }
}

function isItMedium(str) {
  if(str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!";
  }
}

function isItShort(str) {
  if(str.length < 10) {
    return "That's a small string!";
  }
  else 
    return "That's not a small string!";
}

function howLongIsMyString(str) {
  if(str.length > 20) {
    return 'That\'s a long string!';
  }
  else if(str.length >= 10 && str.length <= 20) {
    return "That's a regular sized string!";
  }
  else {
    return "That's a small string!";
  }
}

function instructorHeight(str) {
  if(str === 'Colin') {
    return 62;
  }
  else if(str === 'Mesuara') {
    return 69;
  }
  else {
    return "I don't know that instructor!";
  }
}

/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}