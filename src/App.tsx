import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import homeRoutes from './features/home/homeRoutes';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          {[...homeRoutes].map(({ path, component, key }) => (
            <Route exact path={path} component={component} key={key} />
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
