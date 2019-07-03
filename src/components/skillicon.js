import React from "react"
import SimpleIcons from "simple-icons-react-component"

import styles from "./skillicon.module.css"

export default (props) => (
  <div className={styles.skillIcon}>
    <SimpleIcons name={props.Name} />
  </div>
)
