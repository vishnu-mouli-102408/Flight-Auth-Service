const validateUserAuth = async (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      data: {},
      success: false,
      message: "Something went wrong",
      err: "Email or Password is missing.",
    });
  }
  next();
};

module.exports = { validateUserAuth };
