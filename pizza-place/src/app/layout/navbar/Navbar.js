import React, { Component } from 'react'
import './Navbar.scss'

class Navbar extends Component {

  constructor(props){
    super(props)

    this.state = {}
  }
  
  scrollToRecommendation(ref){
    window.scrollTo(0, ref.current.offsetTop)  
  }

  render(){
    return (
      <nav className="header">
        <ul className="header__list flex space-between center item-center">
          <li className="header__list_title"> Pizza Place </li>
        </ul>
     </nav>
    )
  }
}

export default Navbar