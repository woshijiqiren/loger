
import './App.css';
import React from 'react';
import Login from './components/login/login.js'
import Index from './components/index/index.js'
import { HashRouter, Route, Switch,Redirect } from 'react-router-dom';
import MyRouter from './containers/MyRouter.js'
import { createHashHistory } from 'history';
const hashHistory = createHashHistory();
class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter history={hashHistory}>
          <Switch>
            <Route path="/login" exact component={Login}></Route>
            <MyRouter path="/index" component={Index}></MyRouter>
            <Redirect to="login"></Redirect>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
