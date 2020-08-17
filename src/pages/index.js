import { graphql, Link } from 'gatsby'
import React from 'react'
import { EventList } from '../components/events-list'
import Image from '../components/image'
import { H1, P } from '../components/page-elements'
import SEO from '../components/seo'

export default function IndexPage({ data }) {
  const futureEvents = []
  const pastEvents = []

  data.allAirtable.nodes.map(event => {
    event = event.data
    if (new Date(event.Date) >= new Date()) {
      return futureEvents.push(event)
    } else {
      return pastEvents.push(event)
    }
  })

  return (
    <>
      <SEO title="Home" />
      <H1>Hi people</H1>
      <P>Welcome to your new Gatsby site.</P>
      <P>Now go build something great.</P>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <EventList
        futureEvents={futureEvents}
        pastEvents={pastEvents}
      />
      <Link to="/page-2/">Go to page 2</Link>
    </>
  )
}

export const indexQuery = graphql`
  query IndexQuery {
    allAirtable {
      nodes {
        data {
          id
          Title
          Description
          Date
          City
        }
      }
    }
  }
`
