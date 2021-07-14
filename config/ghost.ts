import GhostContentAPI from '@tryghost/content-api'

// Create API instance with site credentials
export const api = new GhostContentAPI({
  url: 'https://uma-protocol.ghost.io',
  key: '4ec99b0b1f56c85d7ceb7b2c70',
  version: 'v3'
})
