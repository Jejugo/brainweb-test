const makeRetrieveRecommendedOrder = () => {
  return function retrieveRecommendedOrder(){
    return {
      dough: 'Fina',
      size: 'Média',
      filling: 'Margherita',
      imgUrl: 'http://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167-900x600.jpg'
    }
  }
}

module.exports = makeRetrieveRecommendedOrder