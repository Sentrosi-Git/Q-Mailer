module.exports = (req, res, next) => {
  //we call 'next' when the middleare is complete/finished running, like 'done'
  if (!req.user) {
    return res.status(401).send({ error: 'You must log in!' });
  }

  next();
}
