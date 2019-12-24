import React from 'react';
import LoginPage from 'pages/login';
import ViewPage from 'pages/view'
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path='/' component={LoginPage}></Route>
            <Route path='/view' component={ViewPage}></Route>
          </Switch>
      </div>
    )
  }
}

export default App;
