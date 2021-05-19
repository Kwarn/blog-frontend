exports.signup = function (email, name, password) {
  return {
    query: `
    mutation CreateNewUser($email: String!, $name: String!, $password: String!){
      createUser(userInput: {email: $email, name: $name, password: $password})
      {
        _id
        name
      }
    }
    `,
    variables: {
      email: email,
      name: name,
      password: password,
    },
  };
};

exports.login = function (email, password) {
  return {
    query: `
    query UserLogin($email: String!, $password: String!){
      login(email: $email, password: $password)
      {
        token
        userId
      }
    }
  `,
    variables: {
      email: email,
      password: password,
    },
  };
};

exports.createPost = function (title, content, imageUrl) {
  return {
    query: `
    mutation CreateNewPost($title: String!, $content: String!, $imageUrl: String! ){
      createPost(postInput: {title: $title, content: $content, imageUrl: $imageUrl})
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
  `,
    variables: {
      title: title,
      content: content,
      imageUrl: imageUrl,
    },
  };
};

exports.updatePost = function (postId, title, content, imageUrl) {
  return {
    query: `
    mutation UpdateExistingPost($postId: ID!, $title: String!, $content: String!, $imageUrl: String!){
      updatePost(postId: $postId, postInput: {title: $title, content: $content, imageUrl: $imageUrl})
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
    `,
    variables: {
      postId: postId,
      title: title,
      content: content,
      imageUrl: imageUrl,
    },
  };
};

exports.deletePost = function (postId) {
  return {
    query: `
    mutation DeleteUserPost($postId: ID!){
      deletePost(postId: $postId)
      {
        postId
      }
    }
    `,
    variables: {
      postId: postId,
    },
  };
};

exports.getPosts = function (page) {
  return {
    query: `
    query FetchPosts($page: Int!){
      getPosts(page: $page){
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
    `,
    variables: {
      page: page,
    },
  };
};

exports.getPost = function (postId) {
  return {
    query: `
    query GetSinglePost($postId: ID!){
      getPost(postId: $postId)
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
    `,
    variables: {
      postId: postId,
    },
  };
};

exports.getStatus = function () {
  return {
    query: `
    {
      getStatus
      {
        status
      }
    }
  `,
  };
};

exports.updateStatus = function (status) {
  return {
    query: `
    mutation UpdateUserStatus($status: String!){
      updateStatus(statusInput: {status: $status})
      {
        status
      }
    }
    `,
    variables: {
      status: status,
    },
  };
};
