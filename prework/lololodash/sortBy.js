var _ = require("lodash");

var worker = function(items){
 return _.sortBy(items, (item)=>{return item.quantity * -1;});
};

module.exports = worker;
