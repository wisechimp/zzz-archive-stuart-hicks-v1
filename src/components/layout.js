import React from "react"

import Menu from "../components/menu"

export default (props) => (
  <div>
    <Menu pageTitle={props.pageTitle} />
    {props.children}
  </div>
)
