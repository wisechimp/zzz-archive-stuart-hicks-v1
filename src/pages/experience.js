import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import SimpleIcons from "simple-icons-react-component"

import Layout from "../components/layout"

export default () => (
  <Layout pageTitle="Experience">
    <h1>Experience</h1>

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="August 2019"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SimpleIcons name="Udacity" className="simpleIconPosition" />}
      >
        <h3 className="vertical-timeline-element-title">
          Developing Android Apps with Kotlin
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Online Course - Udacity
        </h4>
        <p>
          Mobile, Android, Kotlin
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </Layout>
)
