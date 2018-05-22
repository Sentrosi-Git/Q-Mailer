//survey form shows a form for a user to add input
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends Component {
  render() {
    return (
      <div>
        Form Survey Form!
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
}) (SurveyForm);
