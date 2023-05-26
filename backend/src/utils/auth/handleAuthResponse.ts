export const handleAuthError = (errorMessage, code, error = null) => {
  return {
    message: errorMessage,
    status: code,
    error,
  };
};

export const handleAuthResponse = (responseMessage, data) => {
  return {
    message: responseMessage,
    status: 200,
    data: data,
  };
};
