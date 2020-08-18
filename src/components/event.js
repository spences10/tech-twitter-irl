import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { H3, H4, P } from './page-elements'

const EventWrapper = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.lg};
  margin: ${({ theme }) => theme.spacing[4]} 0;
  padding: ${({ theme }) => theme.spacing[2]};
  background: hsla(0, 0%, 99%, 1);
`

export const Event = ({ event }) => (
  <EventWrapper key={event.Event_Title}>
    <Link to={`/events/${event.id}`}>
      <H3>{event.Event_Title}</H3>
    </Link>
    <H4>
      {event.Date} • {event.City}
    </H4>
    <P>{event.Description}</P>
  </EventWrapper>
)
