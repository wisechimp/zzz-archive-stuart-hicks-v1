import React from "react"
import { Nav, Navbar } from "react-bootstrap"

import SocialMediaLinks from "./socialmedialinks"
import styles from "./menu.module.css"

export default (props) => (
  <Navbar expand="sm">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Brand className="actionBar">{props.pageTitle}</Navbar.Brand>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="justify-content-center">
        <Nav.Item>
          <Nav.Link
            className={styles.menuBar}
            href="/"
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={styles.menuBar}
            href="/experience/"
          >
            Experience
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={styles.menuBar}
            href="/portfolio"
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={styles.menuBar}
            href="/skills/"
          >
            Skills
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/interests/">Interests</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
    <SocialMediaLinks />
  </Navbar>
)
