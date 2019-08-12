import React, { Component } from "react";
import {withRouter} from "react-router";

//importing Assets:
import woman from "../../Assets/woman.png";

//importing CSS:
import './AdministrationButton.css'


class AdministrationButton extends Component {

  administrationButtonHandler = () => {
    this.props.history.push("/administration")
  };

  render() {
    return (
      <div>
        <button className='administration-button' onClick={this.administrationButtonHandler}>
          <img src={woman} alt='img-provitional-description' />
        </button>
      </div>
    );
  }
}

export default withRouter(AdministrationButton)
