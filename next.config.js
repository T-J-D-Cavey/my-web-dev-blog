const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if(phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_database: 'blog_dev'
      },
      reactStrictMode: true
    }
  }
  return {
    env: {
      mongodb_database: 'blog_prod'
    },
    reactStrictMode: true
  }
}