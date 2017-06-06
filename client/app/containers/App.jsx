import React from 'react';
import {
  HashRouter,
  Route,
} from 'react-router-dom';
import Search from './search';
import Detail from './detail';

const App = () => (
  <HashRouter>
    <div>
      <Route exact path="/" component={Search} />
      <Route path="/detail" component={Detail} />
    </div>
  </HashRouter>
);

export default App;
