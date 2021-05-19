const errorHandler = (errorMessage, statusCode) => {
  const error = new Error(errorMessage);
  error.status = statusCode;
  return error;
};

export default errorHandler;
