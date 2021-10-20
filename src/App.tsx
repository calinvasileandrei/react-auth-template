import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import PrivateRoute from 'navigation/privateRoute';
import {AppRoutes} from 'navigation/routes';

function App() {
  return (
      <Switch>
        <Route {...AppRoutes.LOGIN}/>
        <Route {...AppRoutes.REGISTER}/>
        <PrivateRoute {...AppRoutes.HOME}/>
      </Switch>
  );
}

export default App;
