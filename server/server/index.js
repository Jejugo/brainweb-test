const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cors = require('./cors/origins')
const { 
  getHealth,
  postOrder,
  getRecommendedOrder
} = require('../src/controllers')

const expressCallBack = require('./endpoint-callback')

const app = express()
app.use(bodyParser.json())

app.use(function(req, res, next) {
  cors.allowedOrigins.forEach(origin => {
    res.header("Access-Control-Allow-Origin", origin);
  })
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/health', expressCallBack(getHealth))
app.post('/order', expressCallBack(postOrder))
app.get('/order/recommendation', expressCallBack(getRecommendedOrder))


app.listen(3001, () => {
  console.log('Server is listening on port 3001.')
})
 
module.exports = app