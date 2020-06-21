import React, { useEffect, useState } from 'react'
import Layout from './app/layout/Layout'
import Order from './app/components/order/Order'
import Recommendation from './app/components/recommendation/Recommendation'
import axios from 'axios'
import './App.css';

function App() {

  const [recommended, setRecommended] = useState({ data: {}})

  useEffect(() => {
    axios.get('http://localhost:3001/order/recommendation')
      .then(response => setRecommended({ data: response.data.recommendedOrder }))
      .catch(err => console.error({
        message: 'ERROR_FETCHING_RECOMMENDED_ORDER',
        description: err
      }))
  }, [])  

  return (
    <main className="App">
      <Layout>
        <Order></Order>
        <Recommendation recommended={recommended}></Recommendation>
      </Layout>
    </main>
  );
}

export default App;
