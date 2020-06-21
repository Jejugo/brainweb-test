const { createOrder } = require('../../use-cases')

const makePostOrder = () => {
  return async function postOrder(httpRequest){
    try {
      const { ...order } = httpRequest.body
    
      const orderCreated = createOrder(order)
      if(orderCreated){
        return {
          statusCode: 200,
          headers: {
            'Content-Type': 'application/json',
            'Last-Modified': new Date(orderCreated.modifiedOn).toUTCString()
          },
          body: {
            orderCreated
          }
        }
      }
    }

    catch(err){
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 400,
        body: {
          error: err.message
        }
      }
    }
  }
}

module.exports = makePostOrder