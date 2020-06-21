import React from 'react'
import './form.scss'

const sizes = [
  'pequena',
  'média',
  'grande'
]

export default function StepTwo({ value, name, handleInput, step }) {
  if(step !== 2){
    return null
  }

  return (
    <section className="form-step flex center column item-center">
      <h1 className="form-step__title"> Qual o tamanho? </h1>
      <select id={value} name={name} className="form-step__select" value={value} onChange={handleInput}>
        {
          sizes.map((size, i) => (
            <option key={i} name={name} value={size}>{ size.charAt(0).toUpperCase() + size.slice(1)  }</option>
          ))
        }
      </select>
    </section>
  )
}
