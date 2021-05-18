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

exports.updatePost = function (postId, title, content, imageUrl) {
  return `
  mutation {
    updatePost(postId: "${postId}", postInput: {title: "${title}", content: "${content}", imageUrl: "${imageUrl}"})
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

exports.deletePost = function (postId) {
  return `
  mutation {
    deletePost(postId: "${postId}")
    {
      postId
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

exports.getStatus = function () {
  return `
  {
    getStatus
    {
      status
    }
  }
  `;
};

exports.updateStatus = function (status) {
  return `
  mutation {
    updateStatus(statusInput: {status: "${status}"})
    {
      status
    }
  }
  `;
};
