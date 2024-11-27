// authMiddleware.js
const verifyCoachOrOwner = (req, res, next) => {
  const user = req.user; // Assuming `req.user` is populated from previous middleware
  if (user && (user.role === "coach" || user.role === "owner")) {
    return next();
  }
  res.status(403).json({ message: "Access denied" });
};

module.exports = { verifyCoachOrOwner };
