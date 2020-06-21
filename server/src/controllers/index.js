const makeGetHealth = require('./health')
const makePostOrder = require('./orders/postOrder')
const makeGetRecommendedOrder = require('./orders/getRecommendedOrder')

const getHealth = makeGetHealth()
const postOrder = makePostOrder()
const getRecommendedOrder = makeGetRecommendedOrder()

module.exports = {
  getHealth,
  postOrder,
  getRecommendedOrder
}