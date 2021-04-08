import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from "./authAPI";
import styled from '@emotion/styled'

const FORM = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 90vh;

  & > div {
    border: 1px solid #eee;
    width: 100%;
    max-width: 640px;
    padding: 20px;
  }

  h1 {
    margin-bottom: 0px;
    text-align: center;
  }

  input[type="text"], input[type="password"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }
`

export default function Auth() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    host: '',
    port: '',
    database: '',
  })
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault()
    const loginThunk = signIn(credentials)
    dispatch(loginThunk)
  }
  const handleChange = (event) => {
    event.preventDefault();
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  }

  return (
    <FORM onSubmit={handleSubmit}>
      <div>
        <h1>Login</h1>
        <input type="text" value={credentials.host} onChange={handleChange} name="host" placeholder="Host:" required />
        <input type="text" value={credentials.port} onChange={handleChange} name="port" placeholder="Port:" required />
        <input type="text" value={ credentials.username } onChange={ handleChange} name="username" placeholder="Username:" required />
        <input type="password" value={ credentials.password } onChange={ handleChange } name="password" placeholder="Password:" />
        <input type="text" value={ credentials.database } onChange={ handleChange } name="database" placeholder="Database:" required />

        <input type="submit" value="Login" />
      </div>
    </FORM>
  );
}
