var _ = require("lodash");

var worker = function(words){
  return _.chain(words)
    .sort()
    .map( (word) => word.toUpperCase() + "CHAINED");
};

module.exports = worker;
