import React from 'react'

import styles from "./portfoliocard.module.css"

export default(props) => (
  <div className={styles.portfolioCard}>
    <h5 className={styles.portfolioCardTitle}>{props.title}</h5>
    <p>{props.platform}</p>
    <img className={styles.portfolioCardImage} src={props.projectScreenshot} alt={props.imgAltText}/>
    <p>{props.description}</p>
  </div>
)
