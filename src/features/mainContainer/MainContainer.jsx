import styled from '@emotion/styled'
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
import axiosParams from "./sqlAxiosParams"
import ResponsiveTable from "./ResponsiveTable";

const FlexColumns = styled.div`
  display: block;
  width: 100%;

  @media (min-width: 1024px) {
    width: calc(100% - 300px);
  }
`

const FORM = styled.form`
  position: relative;
  height: 30vh;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 100%;
  margin-top: 10px;

  textarea {
    width: 100%;
    height: 100%;
    padding: 12px 20px;
    box-sizing: border-box;
    background-color: white;
    resize: none;
    padding-right: 150px;
  }

  input[type="submit"] {
    position: absolute;
    right: 20px;
    top: 10px;
    zIndex: 999;
    background-color: #4CAF50;
    @media (min-width: 1024px) {
      width: 100px;
    }
    color: white;
    border-radius: 4px;
    padding: 10px;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }
`

export default function MainContainer () {
  const [results, setResults] = useState()
  const [query, setQuery] = useState('')

  const auth_token = useSelector(state => state.auth.auth_token)

  const executeQuery = (event) => {
    event.preventDefault();
    axios(axiosParams(query, auth_token))
      .then(function (response) {
        if (Array.isArray(response.data)) {
          setResults(response.data)
        }
        else {
          setResults(response.data.error)
        }
      })
      .catch(function (error) {
        setResults("Error Processing the query")
      })
  }

  const handleChange = (event) => {
    setQuery(event.target.value)
    setTimeout(() => {event.target.click()}, 1000);
  }

  return (
    <FlexColumns>
      <FORM onSubmit={executeQuery}>
        <textarea value={query} onChange={handleChange} />
        <input type="submit" value="RUN" />
      </FORM>
      { Array.isArray(results) ? <ResponsiveTable results={results} /> : <div>{results}</div>}
    </FlexColumns>
  )
}