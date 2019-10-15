import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./projectcard.module.css"

export default(props) => (
  <div className={styles.projectCard}>
    <div className={styles.projectCardTitleContainer}>
      <h5 className={styles.projectCardTitle}>{props.title}</h5>
    </div>
    <Img className={styles.projectCardImage} fluid={props.imageSrc} alt={props.imageAltText}/>
    <p className={styles.projectCardText}>{props.description}</p>
  </div>
)
