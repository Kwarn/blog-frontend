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
      imageUrl
      creator {
        name
      }
      createdAt
    }
  }
  `;
};

exports.getPosts = function (page) {
  return `
  {
    getPosts(page: ${page}){
      posts{
        _id
        title
        content
        imageUrl
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

exports.getPost = function (postId) {
  return `
  {
    getPost(postId: "${postId}")
      {
        title
        content
        imageUrl
        creator{
          name
        }
        createdAt
      }
  }
  `;
};
