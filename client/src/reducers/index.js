// another index.js because of react/redux conventions
import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; //form reducer
import authReducer from './authReducer';


export default combineReducers({
  auth: authReducer,
  form: reduxForm
});
