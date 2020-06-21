const { order: orderEntity } = require('../../entities')

const makeCreateOrder = () => {
  return function createOrder(orderInfo){
    const order = orderEntity(orderInfo)
    //check on db if order exists and if it's valid.
    /*
     * ...
     * */

    return {
      id: order.getId(),
      order: {
        dough: order.getDough(),
        size: order.getSize(),
        filling: order.getFilling()
      }
    }

  }
}

module.exports = makeCreateOrder