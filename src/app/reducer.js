import { combineReducers } from "redux";
import authReducer from "../features/auth/authSlice";
import tablesReducer from "../features/sidebar/tablesSlice";

export const reducer = combineReducers({
  auth: authReducer,
  tables: tablesReducer
});
