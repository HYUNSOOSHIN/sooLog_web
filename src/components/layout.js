import React, {useState} from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false)
  return (
    <div id='root' onClick={()=>setMenu(false)}>
      <Header menu={menu} setMenu={setMenu} />
      <Main>
        <main>{children}</main>
      </Main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Main = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0 1rem 1.45rem;
  padding-top: 0;
`;
