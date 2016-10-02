'use strict';

first().then(second).then(console.log);

//here's the long way that they give in the answer:
// var firstPromise = first();
//
//  var secondPromise = firstPromise.then(function (val) {
//    return second(val);
//  });
//
//  secondPromise.then(console.log);
