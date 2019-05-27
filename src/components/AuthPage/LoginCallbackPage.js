import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Message } from './styles';
import { Button } from '@material-ui/core';

const LoginCallbackPage = ({ user, error, location, processLoginCallback, history, requestLogin }) => {
  useEffect(() => {
    async function loginCallback() {
      const params = new URLSearchParams(location.search);
      const code = params.get('code');
      const result = await processLoginCallback(code);      
      if (result) {
        history.push('/');
      }
    }
    
    loginCallback();
  }, []);

  return (
    <Container>    
      { !user && !error && 
        <Message>Processing login callback, please wait...</Message>
      }
      { error &&
        <div>
          <Message>
            Unable to login, please try again.
          </Message>
          <Button onClick={requestLogin} gradient>Login</Button>
        </div>
      }
    </Container>
  )
}

export default withRouter(LoginCallbackPage);
