import React, { Component } from 'react'

import formula from '../../Assets/formula.png'

import './ExistingBiopsyButton.css'

class ExistingBiopsyButton extends Component {
  render() {
    return (
        <div>
        <button className='new-biopsy-button'>
          <img src={formula} alt='img-provitional-description'/>
        </button>
      </div>
    )
  }
}

export default ExistingBiopsyButton;
