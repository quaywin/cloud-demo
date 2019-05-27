import React from 'react';
import { Container, Message } from './styles';
import { Button } from '@material-ui/core';

const LogoutPage = ({ requestLogin }) => (
  <Container>
    <div>
      <Message>
        You have been logout. Click login to continue to use this app.
      </Message>
      <Button onClick={requestLogin} gradient>Login</Button>
    </div>

  </Container>
);

export default LogoutPage;
