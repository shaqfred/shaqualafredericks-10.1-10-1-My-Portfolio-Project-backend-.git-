const checkName = (request, response, next) => {
  if (request.body.name) {
    return next();
  } else {
    response.status(400).json({ error: "Name is required" });
  }
};
