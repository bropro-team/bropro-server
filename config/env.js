export const prod = () => ({
  NODE_ENV: JSON.stringify('production')
})

export const dev = () => ({
  NODE_ENV: JSON.stringify('development')
})
