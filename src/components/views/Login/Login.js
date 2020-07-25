import React from 'react';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = () => (
  <form className={styles.component} noValidate autoComplete="off">
    <TextField className="input" id="login" label="Login" />
    <TextField className="input" id="password" label="Password" type="password" />
    <Button to={`${process.env.PUBLIC_URL}/`}>
      Log in
    </Button>
  </form>
);

export default Login;
