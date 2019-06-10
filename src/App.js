import React , {Component} from 'react';
import './App.css';
import ValidatedForm from './components/Login/ValidateForm';
import Styles from './components/Login/Styles.css';
import { Link, withRouter } from "react-router-dom";
import  Logout from './components/Login/Logout';
import { createBrowserHistory } from 'history';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from './views/HomePage';
import LayoutPage from './views/LayoutPage';
// import Styles from './components/Login/Styles.css';

var hist = createBrowserHistory();

function App() {
  return (
    <Router history={hist}>
		<Switch>
			<Route exact path={'/'} component={HomePage} />;
      <Route exact path={'/layout'} component={LayoutPage}/>;			
      <Route exact path={'/logout'} component = {Logout}/>;
		</Switch>
	  </Router>
  );
}

export default App;

{/*export default App;

class App extends Component {
  handleClick = () => {
    const handleLogout = history => () => {
    store.remove('loggedIn');
    history.push('/');
};
  }
  render(){
  return (
    <div className="App">
      <h1> Login Form</h1>
      <Logout onClick = {this.handleClick}/>
     {/*<ValidatedForm /> */} 
    {/*  <MonsonaryLayout columns={3} gap={25}>
        {
          [...Array(12).keys()].map(key => {
            const height = 200 + Math.ceil(Math.random() * 300);
        
            return (
              <div style={{height: `${height}px`}} />
            )
          })
        }
      </MonsonaryLayout> */}
      {/* <MonsonaryLayout/> 
    </div>
  );
}
} */}