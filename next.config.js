const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    images: {
      domains: ['media.graphcms.com', 'media.graphassets.com'],
    },
    assetPrefix: isProd ? 'https://soha.vercel.app/' : '',
  }