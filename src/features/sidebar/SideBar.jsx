import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Collapsible from "./Collapsible";
import { fetchTables } from "./tableAPI";

const Container = styled.div`
  margin-right: 10px;
  position: relative;
  background: white;
  @media (min-width: 1024px) {
    width: 300px;
  }

  .close, .hamburger {
    padding: 5px;
    background: grey;
    color: white;
    border: none;
    border-radius: 4px;
  }

  .sidebar {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    background: white;
    display: none;
    transition: opacity 1s ease-out;
    opacity: 0;

    .close {
      display: block;
    }
    @media (min-width: 1024px) {
      position: relative;
      display: block !important;
      opacity: 1 !important;

      .close {
        display: none;
      }
    }
  }
  .hamburger {
    margin-top: 10px;
    @media (min-width: 1024px) {
      display: none;
    }
  }
  &.active .sidebar {
    opacity: 1;
    display: block;
  }
`

const FlexColumns = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 85vh;
    overflow: auto;
    h2 {
      margin: 0;
    }
  `

export default function Sidebar() {
  let tableList = useSelector(state => state.tables)
  let database = useSelector(state => state.auth.database)
  const [collapseOpen, setCollapseOpen] = useState(false);
  const toggleCollapse = () => {
    setCollapseOpen(!collapseOpen);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTables)
  }, [])
  return (
    <Container className={collapseOpen ? "active" : ""}>
      <button className="hamburger" onClick={toggleCollapse}>"Show Tables"</button>
      <div className="sidebar">
        <button className="close" onClick={toggleCollapse}>X</button>
        <h2>Connected to db: {database}</h2>
        <FlexColumns>
        {
          Object.keys(tableList).map(key => {
            let values = tableList[key]
            return <Collapsible key={key} title={key} contents={values["columns"]} contentFetched={values["fetchedColumns"]} />
          })
        }
        </FlexColumns>
      </div>
    </Container>
  )
}