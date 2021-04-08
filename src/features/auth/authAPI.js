import axios from 'axios'
import { LOGGED_IN, LOGGED_OUT, LOGGED_IN_STATUS } from './constants'

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL

export function signIn(formData) {
  return async function signInThunk(dispatch) {
    const response = await axios.post('/login', formData)
    localStorage.setItem('auth_token', JSON.stringify(response.data));
    dispatch({ type: LOGGED_IN, payload: response.data })
  }
}

export async function signOut(dispatch, getState) {
    const response = await axios.post("/logout", {
      auth_token: getState().auth.auth_token,
    })
    localStorage.removeItem('auth_token');
    dispatch({ type: LOGGED_OUT, payload: response.data })
}

export async function loginStatus(dispatch, getState) {
  const response = await axios.get('/login-status', {
    params: {
      auth_token: getState().auth.auth_token,
    }
  })
  dispatch({ type: LOGGED_IN_STATUS, payload: response.data })
}

