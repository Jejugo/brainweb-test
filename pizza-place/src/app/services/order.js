import axios from 'axios'

const sent = params => ({
  status: 200,
  message: 'Data sent',
  data: { ... params }
})

const errorMessage = (err) => ({
  status: 'Error',
  message: err
})

export const placeOrder = (params) => axios
  .post(`http://localhost:3001/order`, { ...params }) 
  .then(response => response)
  .catch(err => console.error(errorMessage(err)))
