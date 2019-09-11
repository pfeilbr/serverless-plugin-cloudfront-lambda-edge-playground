const fs = require("fs");
module.exports.users = () => {
  return JSON.stringify(require("./users.json"));
};
