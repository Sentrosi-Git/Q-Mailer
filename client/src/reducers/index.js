// another index.js because of react/redux conventions
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; //form reducer
import authReducer from './authReducer';
import surveysReducer from './surveysReducer';


export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysReducer
});
