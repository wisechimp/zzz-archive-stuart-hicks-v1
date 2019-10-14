import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"

import styles from "./portfoliocard.module.css"

export default(props) => (
  <div className={styles.portfolioCard}>
    <div className={styles.portfolioCardTitleContainer}>
      <h5 className={styles.portfolioCardTitle}>{props.title}</h5>
    </div>
    <p className={styles.portfolioCardPlatform}>{props.platform}</p>
    <Img className={styles.portfolioCardImage} fluid={props.projectScreenshot} alt={props.imgAltText}/>
    <p className={styles.portfolioCardText}>{props.description}</p>
    <div className={styles.portfolioCardButt}>
      <Link className={styles.portfolioCardButtText} to={props.hyperlink}>Show Me More!</Link>
    </div>
  </div>
)
