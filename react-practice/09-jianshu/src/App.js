import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './common/header/index';

import store from './store/index';

import Home from './pages/home';
import Detail from './pages/detail';


function App() {
  return (
    <Provider store={store}>
        <Header />
        <Router>
        <Switch>
          <Route exact path='/'>   {/* exact 表示完全匹配这个路由 才路由这个组件 */}
            <Home/>
          </Route>
          <Route path='/detail'>
            <Detail/>
          </Route>
        </Switch>
        </Router>
    </Provider>
  );
}

export default App;