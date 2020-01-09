import React, {useState} from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false)
  return (
    <div id='root' onClick={()=>setMenu(false)}>
      <Header menu={menu} setMenu={setMenu} />
      <div id='layout'>
        <main>{children}</main>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
