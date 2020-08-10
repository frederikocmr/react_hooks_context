import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

// Merchant Pages
import Main from './pages/main';
import Test from './pages/test';


export default function Routes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/test" exact component={Test} />

    </Switch>
  );
}
