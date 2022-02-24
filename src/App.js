import React from 'react';
import { Router, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { renderRoutes } from './routes';

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <BrowserRouter>{renderRoutes()}</BrowserRouter>
    </Router>
  );
}

export default App;
