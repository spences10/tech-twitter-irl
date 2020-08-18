import React from 'react'
import { Event } from './event'
import { H2 } from './page-elements'

export const EventList = ({ futureEvents, pastEvents }) => {
  return (
    <>
      <H2>Upcoming Events</H2>
      {futureEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
      <H2>Past Events</H2>
      {pastEvents.map(event => (
        <Event event={event} key={event.id} />
      ))}
    </>
  )
}
