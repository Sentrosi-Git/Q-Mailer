const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {

    const charge = await stripe.charges.create({ //use async in place of promise
      amount: 500,  //in cent/penny amount
      currency: 'usd', //change to AUD after production test
      description: '$5 for 5 credits - bargain!',
      source: req.body.id // take the id from the object req.body
    });

    req.user.credits += 5;
    const user = await req.user.save(); //async... complicated, calling by itself doesn't update everything

    res.send(user); //send back the user
  });
};
