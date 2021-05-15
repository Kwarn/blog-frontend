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

exports.createPost = function (title, content, imageUrl) {
  return `
  mutation {
    createPost(postInput: {title: "${title}", content: "${content}", imageUrl: "${imageUrl}"})
    {
      _id
      title
      content
      creator {
        name
      }
      createdAt
    }
  }
  `;
};

exports.getPosts = function () {
  return `
  {
    getPosts{
      posts{
        _id
        title
        content
        creator{
          name
        }
        createdAt
      }
      totalPosts
    }
  }
  `;
};
