import React from 'react'
import './form.scss'

const doughs = [
  'fina',
  'pan',
  'tradicional'
]

export default function StepOne({ value, name, handleInput, step }) {
  if(step !== 1){
    return null
  }

  return (
    <section className="form-step flex center column item-center">
      <h1 className="form-step__title"> Qual sua massa? </h1>
      <select id={value} name={name} className="form-step__select" value={value} onChange={handleInput}>
        {
          doughs.map((dough, index) => (
            <option key={index} name={name} value={dough}>{ dough.charAt(0).toUpperCase() + dough.slice(1)  }</option>
          ))
        }
      </select>
    </section>
  )
}
