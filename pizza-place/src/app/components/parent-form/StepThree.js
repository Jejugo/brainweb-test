import React from 'react'
import './form.scss'

const fillings = [
  'margherita',
  'pepperoni',
  'muzzarela',
  'frango com catupiry'
]

export default function StepThree({ value, name, handleInput, step }) {

  if(step !== 3){
    return null
  }

  return (
    <section className="form-step flex center column item-center">
      <h1 className="form-step__title"> Qual seu recheio? </h1>
      <select id={value} name={name} className="form-step__select" value={value} onChange={handleInput}>
        {
          fillings.map((filling, index) => (
            <option key={index} name={name} value={filling}>{ filling.charAt(0).toUpperCase() + filling.slice(1)  }</option>
          ))
        }
      </select>
  </section>
  )
}
