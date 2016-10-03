var _ = require("lodash");

var worker = function(data){
 return _.forEach(data, (item) => {
   if (item.population > 1){return item.size = 'big';}
   if (item.population > 0.5){return item.size = 'med';}
   if (item.population < 0.5){return item.size = 'small';}
 });
};

module.exports = worker;
