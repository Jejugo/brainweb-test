const { retrieveRecommendedOrder } = require('../../use-cases')

const makeGetRecommendedOrder = () => {
  return async function recommendedOrder(httpRequest){
    const recommendedOrder = retrieveRecommendedOrder()
    return {
      statusCode: 200,
      body: {
        recommendedOrder
      }
    }
  }
}

module.exports = makeGetRecommendedOrder