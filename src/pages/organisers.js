import React from 'react'
import OrganisersCopy from '../copy/organisers.mdx'

export default function Organizers() {
  return (
    <>
      <OrganisersCopy />
      <iframe
        className="airtable-embed"
        src={`https://airtable.com/embed/${process.env.GATSBY_AIRTABLE_FROM}?backgroundColor=purple`}
        frameBorder="0"
        width="100%"
        height="533"
        id="airtable-form"
        title="airtable form"
        style={{
          background: 'transparent',
          border: '1px solid #ccc',
        }}
      />
    </>
  )
}
