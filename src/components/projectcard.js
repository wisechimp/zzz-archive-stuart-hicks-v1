import React from "react"

import * as styles from "./projectcard.module.css"

const ProjectCard = props => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCardTitleContainer}>
        <h5 className={styles.projectCardTitle}>{props.title}</h5>
      </div>
      <img
        className={styles.projectCardImage}
        src={props.imageSrc}
        alt={props.imageAltText}
      />
      <p className={styles.projectCardText}>{props.description}</p>
    </div>
  )
}

export default ProjectCard
