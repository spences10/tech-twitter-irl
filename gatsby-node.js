const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const eventTemplate = path.resolve(`src/templates/event.js`)
  const result = await graphql(`
    {
      allAirtable {
        nodes {
          data {
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(
      `Error loading events`,
      JSON.stringify(result.errors)
    )
  }

  const events = result.data.allAirtable.nodes

  // create page for each Airtable node
  events.forEach(event => {
    createPage({
      path: `/events/${event.data.id}`,
      component: eventTemplate,
      context: {
        id: event.data.id,
      },
    })
  })
}
