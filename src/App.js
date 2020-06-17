import React, {Component} from 'react';
import { Provider } from 'react-redux'

import { BrowserRouter, Route } from 'react-router-dom'


import Login from './containers/login'
import Home from './containers/Home'
import SignUp from './containers/SignUp'

import 'bootstrap/dist/css/bootstrap.css';
import store from './store/store'
import Layout from './hoc/Layout';

import {loadUser} from './store/actions/authActions'

class App extends Component {

  componentDidMount(){
    store.dispatch(loadUser())
  }

  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Layout>
              <Route path="/login" exact component={Login}/>
              <Route path="/register" exact component={SignUp} />
              <Route path="/" exact component={Home} />
  
            </Layout>
          </div>
        </BrowserRouter>
      </Provider>
    );

  }
}

export default App;
