import { LOGGED_IN, LOGGED_IN_STATUS, LOGGED_OUT } from "./constants";
let initialState = (() => {
  try {
    let auth_token = localStorage.getItem("auth_token")
    return auth_token ? JSON.parse(auth_token) : {}
  } catch (error) {
    return {}
  }
})()

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGGED_IN:
      return action.payload;
    case LOGGED_OUT:
      return action.payload;
    case LOGGED_IN_STATUS:
      return Object.assign(state, action.payload);
    default:
      return state;
  }
}

export default authReducer;