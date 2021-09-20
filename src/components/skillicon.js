import React from "react"
import SimpleIcons from "simple-icons-react-component"

import * as styles from "./skillicon.module.css"

const SkillIcon = props => (
  <div className={styles.skillIcon}>
    <SimpleIcons name={props.Name} />
  </div>
)

export default SkillIcon
