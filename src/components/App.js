import React, { useEffect } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import AuthPage from './AuthPage';
import Main from '../containers/Main';

const App = ({ verifyLogin, history, location }) => {  
  useEffect(() => {    
    async function startup() {      
      if (location.pathname.startsWith('/auth') === false) {                        
        const loginResult = await verifyLogin();
        if (!loginResult) {          
          history.replace('/auth/login');
          return;
        }
      }      
    }

    startup();    
  }, []);
  
  return (    
    <Switch>
      <Route path="/auth" component={AuthPage} />
      <Route path="/" component={Main} />
    </Switch>  
  );
}

export default withRouter(App);
