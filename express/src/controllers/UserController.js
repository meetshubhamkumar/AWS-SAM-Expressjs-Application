exports.GetAllUser = async (req, res) => {
  const params = req.params; // Get route parameters
  const body = req.body; // Get JSON body from request
  const query = req.query;
  const headers = req.headers;

  return res.status(200).json({
    message: "User Controller Component",
    params,
    body,
    query,
    headers,
    user: ["SAM", "JOHN"],
  });
};

exports.SaveUser = async (req, res) => {
  const params = req.params; // Get route parameters
  const body = req.body; // Get JSON body from request
  const query = req.query;
  const headers = req.headers;

  return res.status(200).json({
    message: "User Saved...",
    params,
    headers,
    body,
    query,
    user: ["MAX"],
  });
};
