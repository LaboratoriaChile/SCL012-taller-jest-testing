const axios = require('axios');

const functions = {

  // add function return the sum of 2 numbers
  add: (num1, num2) => num1+num2,

  // returns Null
  isNull: () => null,

  // returns a value
  returnValue: (value) => value,

  // returns an object
  returnUser: () => {
    const user = {
      firstName: "serial",
      lastName: "experiments",
      isLoggedIn: true,
    };
    return user;
  },

  fetchPost: () => axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.data)
    .catch(err => "Error"),

}

module.exports = functions;
