import styled from '@emotion/styled';
import React from 'react';

const TABLE_CONTAINER = styled.div`
  width: 100%;
  height: 60vh;
  overflow: auto;

  table {
    border-collapse: collapse;
    height: 100%;

    td, th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    th {
      position: -webkit-sticky;
      position: sticky;
      top: 0;
      padding: 12px 8px;
      text-align: left;
      background-color: #4CAF50;
      color: white;
    }

    tr {
      &:nth-child(even){background-color: #f2f2f2;}
      &:hover {background-color: #ddd;}
    }
  }
`

export default function Counter({ results = []}) {
  return (
    <TABLE_CONTAINER>
      <table>
        <thead>
          <tr>
            { results.length > 0 ?
          Object.keys(results[0]).map(column => {
            return (<th>{column}</th>)
          }) : "" }
          </tr>
        </thead>
        <tbody>
          {results.map(row => {
            return (<tr>
              { Object.values(row).map(value => {
                return (<td>{value}</td>)
              })
            }
              </tr>)
          })}
        </tbody>
        </table>
    </TABLE_CONTAINER>
  );
}
