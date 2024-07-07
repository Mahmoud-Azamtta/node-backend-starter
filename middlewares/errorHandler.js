const globalErrorHandler = (error, _, res, __) => {
  const statusCode = error.statusCode || 500;
  const status = error.status || "error";

  return res.status(statusCode).json({ status, message: error.message });
};

export default globalErrorHandler;
