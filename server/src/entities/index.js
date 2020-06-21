
const { v4: uuid } = require('uuid')
const makeOrder = require('./order')

const order = makeOrder({ uuid })

module.exports = {
  order
}