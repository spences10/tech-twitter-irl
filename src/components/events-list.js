import React from 'react'
import { Event } from './event'

export const EventList = ({ futureEvents, pastEvents }) => {
  return (
    <>
      <h2>Upcoming Events</h2>
      {futureEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
      <h2>Past Events</h2>
      {pastEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </>
  )
}
