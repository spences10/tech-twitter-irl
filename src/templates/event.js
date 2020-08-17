import React from 'react'

export default ({ data }) => {
  const event = data.airtable.data
  return (
    <>
      <h2>{event.Event_Title}</h2>
      <h4>
        Host:{' '}
        <a href={`https://twitter.com/${event.Twitter_Username}`}>
          {event.Organiser_Name}
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
        Event_Title
        Description
        Date
        City
        Organiser_Name
        Twitter_Username
        Venue
      }
    }
  }
`
