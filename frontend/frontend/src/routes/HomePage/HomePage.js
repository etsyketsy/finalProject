import React, { Component } from 'react'
import AdministrationButton from '../../components/AdministrationButton/AdministrationButton';
import NewBiopsyButton from '../../components/NewBiopsyButton/NewBiopsyButton';

import './HomePage.css'
import ExistingBiopsyButton from '../../components/ExistingBiopsyButton/ExistingBiopsyButton';

export default class HomePage extends Component {
  render() {
    return (
      <div className='home-page-main-container'>
      <label>Start new Process</label>
          <NewBiopsyButton/>
          <label>Search existing Donors</label>
          <ExistingBiopsyButton/>
          <label>Administrator Settings</label>
          <a href="https://eskin.propulsion-learn.ch/backend/admin/">
            <AdministrationButton/>
          </a>
      </div>
    )
  }
}
