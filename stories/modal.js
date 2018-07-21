import React, { Component } from 'react'

import { Container } from './styles'



class ModalEntry extends Component {

  updateName = (event) =>{
    event.preventDefault(
    this.stateName({ name : event.target.value })
    )
  }
  changeName = () => {
    this.setState({ name: 'Tonnoy' })
  }
  render(){
    //logic here
    const { name } = this.state
    
    return (
      <div>
        <input type='test' onChange={this.updateName} value={name} />
        <div onClick={this.changeName}>Change Me</div>
        <div> Hello there from my modal</div>
        <ModalChild name={name} >
          <span>
            Hi Im the header of the modal
          </span>
          <div>
            This is the body of the modal
          </div>
          </ModalChild>
      </div>  
    )
  }
}

export default ModalEntry