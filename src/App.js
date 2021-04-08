import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Auth from './features/auth/Auth';
import MainContainer from './features/mainContainer/MainContainer';
import SideBar from './features/sidebar/SideBar';
import Header from './features/header/Header';
import { loginStatus } from "./features/auth/authAPI";
import styled from '@emotion/styled';

const Container = styled.div`
    display: flex;
    margin-top: 10px;
    background: white;
  `

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loginStatus)
  }, [])
  return (
    (<div className="App">
    {
      isLoggedIn ?
      <>
        <Header />
        <Container>
          <SideBar />
          <MainContainer />
        </Container>
      </>
    : <Auth />
    }
  </div>)
  );
}

export default App;
