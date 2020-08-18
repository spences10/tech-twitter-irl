import React from 'react'
import { H2, H4, P } from '../components/page-elements'

export default ({ data }) => {
  const event = data.airtable.data
  return (
    <>
      <H2>{event.Event_Title}</H2>
      <H4>
        Host:{' '}
        <a href={`https://twitter.com/${event.Twitter_Username}`}>
          {event.Organiser_Name}
        </a>
      </H4>
      <H4>
        {event.Date} • {event.City}
      </H4>
      <H4>
        <a
          href={`https://maps.google.com/?q=${event.Venue} ${event.City}`}
        >
          {event.Venue}
        </a>
      </H4>
      <P>{event.Description}</P>
      <a href={event.Link}>DETAILS || RSVP</a>
    </>
  )
}

export const query = graphql`
  query EventByID($id: Int) {
    airtable(data: { id: { eq: $id } }) {
      data {
        id
        Event_Title
        Description
        Date
        City
        Organiser_Name
        Twitter_Username
        Venue
        Link
      }
    }
  }
`
