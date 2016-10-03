var _ = require("lodash");

var worker = _.filter(users, {active: true});

module.exports = worker;
