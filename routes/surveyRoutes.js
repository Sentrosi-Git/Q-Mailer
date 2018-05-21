const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const Survey = mongoose.model('surveys');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {
      const {title, subject, body, recipients } = req.body;

      const survey = new Survey ({
        title, //ES6 syntax when you have the key and value the same (title: title,)
        subject,
        body,
        recipients: recipients.split(',').map(email => ({ email: email.trim() })),
        _user: req.user.id,
        dateSent: Date.now()
      });
      //send an email here
      const mailer = new Mailer(survey, surveyTemplate(survey));
        mailer.send();

  });
};
