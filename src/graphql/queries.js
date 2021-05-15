exports.signup = function (email, name, password) {
  return `
      mutation {
        createUser(userInput: {email: "${email}", name:"${name}", password: "${password}"})
        {
          _id
          name
        }
      }
      `;
};

exports.login = function (email, password) {
  return `
    {
      login(email: "${email}", password: "${password}")
      {
        token
        userId
      }
    }
  `;
};
