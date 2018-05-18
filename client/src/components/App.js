// Using import instead of require because of ES6 (webpack & babel) syntax on front end
// uppercase naming convention because we're exporting a component
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;
//BrowserRouter expects only one child component
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <div>
        <Header />
        <Route exact={true} path="/" component={Landing}/>
        <Route exact path="/surveys" component={Dashboard}/>
        <Route path="/surveys/new" component={SurveyNew}/>
        </div>

      </BrowserRouter>
    </div>
  );
};

export default App;
