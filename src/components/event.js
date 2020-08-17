import { Link } from 'gatsby'
import React from 'react'

export const Event = ({ event }) => (
  <div className="event" key={event.Title}>
    <Link to={`/events/${event.id}`}>
      <h3>{event.Title}</h3>
    </Link>
    <h4>
      {event.Date} • {event.City}
    </h4>
    <p>{event.Description}</p>
  </div>
)
