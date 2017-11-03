let createHash = require('sha.js')

module.exports = function generateNetworkId(...args) {
  let networkId = createHash('sha256')
  let data = args
    .map(el => {
      if (el instanceof Array) {
        return el.map(f => f.toString())
      }
      return el
    })
    .map(JSON.stringify)
    .join()

  return networkId.update(data).digest('hex')
}