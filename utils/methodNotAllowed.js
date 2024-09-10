const methodNotAllowed = (req, res) => {
  console.log(req);
  res
    .status(405)
    .json({
      message: `Method ${req.method} not allowed on ${req.originalUrl}`,
    });
};

// utils are used for spreading codes into different folders

module.exports = methodNotAllowed
