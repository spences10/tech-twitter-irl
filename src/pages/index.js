import { graphql, Link } from 'gatsby'
import React from 'react'
import { EventList } from '../components/events-list'
import { H1 } from '../components/page-elements'
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
      <H1>Welcome to your Tech Twitter IRL.</H1>
      <Link to="/organisers">Organise Your Meetup!</Link>
      <EventList
        futureEvents={futureEvents}
        pastEvents={pastEvents}
      />
    </>
  )
}

export const indexQuery = graphql`
  query IndexQuery {
    allAirtable {
      nodes {
        data {
          id
          Event_Title
          Description
          Date
          City
        }
      }
    }
  }
`
