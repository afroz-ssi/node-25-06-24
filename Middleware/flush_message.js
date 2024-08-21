// Set up a middleware to expose flash messages to the view
const flashMessage = (req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  next();
};

export default flashMessage;
