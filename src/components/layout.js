import React from "react"

import Menu from "../components/menu"

const Layout = props => (
  <div>
    <Menu pageTitle={props.pageTitle} />
    {props.children}
  </div>
)

export default Layout
