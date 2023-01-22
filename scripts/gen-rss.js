const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')

async function generate() {
  const feed = new RSS({
    title: 'Maddi Brumbaugh',
    site_url: 'https://maddisonbrumbaugh.vercel.app/',
    feed_url: 'https://maddisonbrumbaugh.vercel.app/feed.xml',
  })

  await fs.writeFile('./public/feed.xml', feed.xml({ indent: true }))
}

generate()
