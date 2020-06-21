const makeCreateOrder = require('./order/createOrder')
const makeRetrieveRecommendedOrder = require('./order/retrieveRecommendedOrder')

const createOrder = makeCreateOrder()
const retrieveRecommendedOrder = makeRetrieveRecommendedOrder()

module.exports = {
  createOrder,
  retrieveRecommendedOrder
}