module.exports = (req, res, next) => {
  //we call 'next' when the middleare is complete/finished running, like 'done'
  if (req.user.credits < 1) {
    return res.status(403).send({ error: 'You need more credits!' });
  }

  next();
}
