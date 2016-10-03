var _ = require("lodash");

var worker = function(data){
   let hots = [];
   let warms = [];

   let check = (num) => num > 19;

   _.forEach(data, (item, key) => {
      if ( _.every(item, check)){
          hots.push(key);
      } else if ( _.some(item, check)){
        warms.push(key);
      }
  });
   return {hot: hots, warm: warms};
};

module.exports = worker;
