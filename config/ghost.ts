import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: process.env.NEXT_PUBLIC_GHOST_URL || '',
  key: process.env.NEXT_PUBLIC_GHOST_KEY || '',
  version: 'v3'
})
