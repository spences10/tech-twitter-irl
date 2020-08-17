import React from 'react'

export default ({ data }) => {
  const event = data.airtable.data
  return (
    <>
      <h2>{event.Title}</h2>
      <h4>
        Host:{' '}
        <a href={`https://twitter.com/${event.Username}`}>
          {event.Organiser}
        </a>
      </h4>
      <h4>
        {event.Date} • {event.City}
      </h4>
      <h4>
        <a href={`https://maps.google.com/?q=${event.Venue}`}>
          {event.Venue}
        </a>
      </h4>
      <p>{event.Description}</p>
      <a href={event.Link}>DETAILS || RSVP</a>
    </>
  )
}

export const query = graphql`
  query EventByID($id: Int) {
    airtable(data: { id: { eq: $id } }) {
      data {
        id
        Title
        Description
        Link
        Date
        City
        Organiser
        Username
        Venue
      }
    }
  }
`
