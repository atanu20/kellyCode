import React, { useEffect, useState } from 'react';

import { Switch, Route } from 'react-router-dom';

import Error from './pages/Error';

import './App.css';


import Dashboard from './pages/home/Dashboard';
import FormPage from './pages/form/FormPage';



const App = () => {
  return (
    <>
     
        <Switch>
          

          <Route exact path="/" component={Dashboard} />
          <Route exact path="/form" component={FormPage} />

          


         
          <Route component={Error} />
        </Switch>
       
    </>
  );
};

export default App;
