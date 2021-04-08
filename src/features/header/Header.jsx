import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { signOut } from "../auth/authAPI";

export default function Header() {
  const dispatch = useDispatch();
  const logout = (event) => {
    event.preventDefault();
    dispatch(signOut)
  }
  const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    items-content: center;
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 0;
    box-shadow: 0px 7px 11px -14px #111;
    h1 {
      margin: 0;
      margin-left: 20px;
    }
    button {
      padding: 10px 20px;
      border-radius: 30px;
      border: none;
      color: white;
      background-color: red;
      cursor: pointer;
      margin-left: 20px;
    }
  `
  return (
    <NavBar>
      <h1>SQL Client</h1>
      <button onClick={logout}>Logout</button>
    </NavBar>
    )
}