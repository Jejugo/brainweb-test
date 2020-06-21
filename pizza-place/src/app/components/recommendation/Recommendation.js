import React, { Component } from 'react'
import './Recommendation.scss'

class Recommendation extends Component {

  constructor(props){
    super(props)

    this.state = {}

    this.getRecommendation = this.getRecommendation.bind(this)
  }

  getRecommendation(e){
    e.preventDefault()
    console.log('getting recommendation...')
  }

  render(){
  
  const { recommended: { data } } = this.props;

    return (
      <section className="recommendation" onClick={this.getRecommendation}>
        <div className="recommendation__list-container flex space-around center item-center">
          <div className="recommendation__list-container_text">
            <div className="title-wrapper flex center">
              <h1 className="recommendation__title"> Recomendação </h1>
            </div>
            <ul className="recommendation__list flex column center item-center">
              {
                Object.keys(data).length !== 0 && (
                  <>
                    <li className="recommendation__list_item"> Massa: {data.dough}</li>
                    <li className="recommendation__list_item"> Tamanho: {data.size}</li>
                    <li className="recommendation__list_item"> Recheio: {data.filling}</li>
                  </>
                )
              }
            </ul>
          </div>
          <img className="pizza-img" src={data.imgUrl}></img>
        </div>
      </section>
    )
  }
}

export default Recommendation