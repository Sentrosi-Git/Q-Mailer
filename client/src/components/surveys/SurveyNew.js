//Survey new shows survey form and survery form review
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {

  state = { showFormReview: false }; //CRAPP function that is the same as using constructor/props

renderContent() {
  if (this.state.showFormReview) {
    return (
      <SurveyFormReview
        onCancel={() => this.setState({ showFormReview: false })}
      />
    );
  }

  return <SurveyForm
    onSurveySubmit={() => this.setState({ showFormReview: true })}
  />;
}

  render() {
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({ //pure witchcraft, no other explaination.
  form: 'surveyForm'
}) (SurveyNew);
