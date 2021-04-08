import axios from 'axios'
import { TABLES_FETCHED, TABLE_COLUMN_FETCHED } from './constants'

export async function fetchTables(dispatch, getState) {
  const response = await axios.get("/tables", {
    params: {
      auth_token: getState().auth.auth_token
    }
  })
  dispatch({ type: TABLES_FETCHED, payload: response.data })
}

export function fetchTableColumns(tableName) {
  return async function fetchTableColumnsThunk(dispatch, getState) {
    const response = await axios.get(`/table/${tableName}/columns`, {
      params: {
        auth_token: getState().auth.auth_token
      }
    })
    dispatch({ type: TABLE_COLUMN_FETCHED, payload: { tableName: tableName, columns: response.data} })
  }
}

