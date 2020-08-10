import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          <Routes />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
