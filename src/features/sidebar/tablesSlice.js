import { TABLES_FETCHED, TABLE_COLUMN_FETCHED } from "./constants";
const tablesReducer = (state = {}, action) => {
  switch(action.type) {
    case TABLES_FETCHED:
      return action.payload;
    case TABLE_COLUMN_FETCHED:
      return {
        ...state, [action.payload.tableName]: {
          fetchedColumns: true,
          columns: action.payload.columns
        }};
    default:
      return state;
  }
}

export default tablesReducer;