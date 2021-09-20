import React from "react"
import { FaLinkedin, FaGithubSquare } from "react-icons/fa"

import * as styles from "./socialmedialinks.module.css"

const SocialMediaLinks = () => (
  <div className={styles.socialGroup}>
    <a
      href="https://www.linkedin.com/in/stuarthicksse"
      aria-label="LinkedIn icon link to Stuart Hicks' LinkedIn page"
    >
      <FaLinkedin />
    </a>
    <a
      href="https://github.com/wisechimp"
      aria-label="github icon link to Stuart Hicks' github page which is under the wise chimp pseudonym"
    >
      <FaGithubSquare />
    </a>
  </div>
)

export default SocialMediaLinks
