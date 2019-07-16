module.exports = ((req, res, next) => {
  const err = new Error('this error message thing is thinging');
  err.status = 404;
  next(err);
  // expresss error handling, which defualts to 500 error code 
});
