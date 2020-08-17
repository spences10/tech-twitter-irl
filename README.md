# Tech Twitter IRL

There's nothing more awesome than meeting your Twitter friends, IRL.

## Say What Now?

This is intended as means for people who are familiar with each other
on Twitter to organise meetups in real life.

## About the Project

It's is a site that features real-life events from volunteer members
of the Tech Twitter Community.

It is built with [Gatsby] and [Airtable].

Heavily influenced by [DEV.IRL], a lot of it is straight up jacked
from there!!

## Get Involved!

Clone the repo:

```bash
git clone git@github.com:spences10/tech-twitter-irl.git
```

Change into the project:

```bash
cd tech-twitter-irl
```

Install the dependencies

```bash
yarn
```

Set up a link to your development database. [Here is the database],
click the `copy base` button in the top right.

If you haven't generated you API key already go to
https://airtable.com/account and generate your Airtable API key now.

Then, go to your copied base and look at its API documentation. If you
go to the `help` button on the top right, and click on
`API documentation`. Go to the `node.js` or `JavaScript` tab. You
should see a line of code that looks like this:

```js
const base = require('airtable').base('your_base_id')
```

Click on `show API key` checkbox in the top right then copy the id
from the `base` method.

Create an `.env.development` file with three variables. Set the
`GATSBY_AIRTABLE_BASE` to your base key.

There's a file called `sample.env.development` rename it to
`.env.development` it will have the environment variabels you need in
there already.

```text
GATSBY_AIRTABLE_API_KEY=your_api_key
GATSBY_AIRTABLE_BASE=your_base_id
GATSBY_AIRTABLE_FROM=your_form_id
```

After checking `show API key` toggle, you'll also see your api key in
a line of code that looks like this:

```sh
$ export AIRTABLE_API_KEY=your_api_key
```

Set the `GATSBY_AIRTABLE_API_KEY` in your `.env.development` to your
API key.

To get the `GATSBY_AIRTABLE_FROM` select the Tech Twitter IRL form,
then click 'Share form' and copy everything after
`https://airtable.com/`.

Now you're ready to start developing!

```bash
yarn dev
```

## Notes

- In order to see new events on the site, moderators have to check off
  the `approved` box in the Airtable base.
- In order to deploy new events, the site needs to be re-deployed. You
  can do this manually by restarting your dev server.

<!-- Links -->

[gatsby]: https://www.gatsbyjs.org/
[airtable]: https://airtable.com/
[here is the database]: https://airtable.com/tbl7wmrtCZcd5M397
[dev.irl]: https://github.com/thepracticaldev/IRL.DEV
