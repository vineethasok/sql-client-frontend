import styled from "@emotion/styled";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchTableColumns } from "./tableAPI";

export default function Collapsible({ title, contents=[], contentFetched }) {
  const dispatch = useDispatch();
  const [collapse, setCollapse] = useState(false)

  const Button = styled.button`
    background-color: #777;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    margin-bottom: 10px;

    & + .content {
        margin: 10px;
        padding: 10px;
        background-color: #eee;
        display: ${collapse ? 'block' : 'none'};
    }

    &:after {
      content: '${collapse ? '\\2796' : '\\02795'}' ;
      font-size: 13px;
      color: white;
      float: right;
      margin-left: 5px;
    }
  `

  const openCollapsible = (event) => {
    setCollapse(!collapse)
    if(!contentFetched) {
      let fetchTableColumnsThunk = fetchTableColumns(title)
      dispatch(fetchTableColumnsThunk)
    }
  }

  return (
    <>
      <Button key={title} type="button" className="" onClick={openCollapsible}>{title}</Button>
      <div className="content">
        <ul>
          {contents.map((content)=> {
            return <li key={content.title}>{content.title}</li>
          })}
        </ul>
      </div>
    </>
  )
}
