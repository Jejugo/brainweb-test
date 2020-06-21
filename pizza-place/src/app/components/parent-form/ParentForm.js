import React, { Component } from 'react'
import './form.scss'
import StepOne from './StepOne'
import StepTwo from './StepTwo'
import StepThree from './StepThree'

import service  from '../../services'

export default class ParentForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      step: 1,
      massa: '',
      tamanho: '',
      recheio: '',
      message: '',
      newOrder: false
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmitBtn = this.handleSubmitBtn.bind(this)
    this.nextStep = this.nextStep.bind(this)
    this.previousStep = this.previousStep.bind(this)
    this.nextButton = this.nextButton.bind(this)
    this.prevButton = this.prevButton.bind(this)
    this.reset = this.reset.bind(this)
  }

  handleInput(e){
    const { value, name } = e.target
    this.setState(() => ({
      [name]: value
    }))
  }

  async handleSubmitBtn(e){
    try {
      e.preventDefault()
      const { 
        step, 
        massa, 
        tamanho, 
        recheio 
      } = this.state
  
      if(step === 3){
        const body = {
          dough: massa,
          size: tamanho,
          filling: recheio
        }

        const res = await service.placeOrder(body)
        if(res.status === 200){
          this.setState(previousState => ({
            message: 'Pedido enviado com sucesso',
            newOrder: !previousState.newOrder
          }))
        }

      }
    }
    catch(err){
      console.log('There was an error while submitting the form: ', err)
    }
  }

  nextStep(){
    const { step } = this.state
    if(step < 3){
      this.setState(previousState =>({
        step: previousState.step + 1
      }))
    }
  }

  previousStep(){
    const { step } = this.state
    if(step > 1){
      this.setState(previousState =>({
        step: previousState.step - 1
      }))
    }
  }

  nextButton(){
    const { step } = this.state
    
    if(step >= 1 && step < 3){
      return (
        <button className="parent-form__next-button" onClick={this.nextStep}>Próximo</button>
      )
    }
  }

  prevButton(){
    const { step } = this.state
    
    if(step > 1 && step <= 3){
      return (
        <button className="parent-form__prev-button" onClick={this.previousStep}>Anterior</button>
      )
    }
  }

  reset(){
    this.setState(previousState => ({
      step: 1,
      massa: '',
      tamanho: '',
      recheio: '',
      message: '',
      newOrder: !previousState.newOrder
    }))
  }

  submitButton(){
    const { step } = this.state
    if(step === 3){
      return (
        <button type="submit" className="parent-form__submit-button">Enviar</button>
      )
    }
  }
  
  render() {
    const { 
      massa, tamanho, recheio, step, message, newOrder
    } = this.state

    return (
      <div className="parent-form">
        <form onSubmit={this.handleSubmitBtn}>
          <StepOne handleInput={this.handleInput} name={"massa"} value={massa} step={step}/>
          <StepTwo handleInput={this.handleInput} name={"tamanho"} value={tamanho} step={step}/>
          <StepThree handleInput={this.handleInput} name={"recheio"} value={recheio} step={step}/>
          <p className="success-message"> { message } </p>
          {this.nextButton()}
          {this.prevButton()}
          {this.submitButton()}
          { newOrder && (
            <button type="submit" className="parent-form__new-order-button" onClick={this.reset}>Novo Pedido</button>
          )}
        </form>
      </div>
    )
  }
}
