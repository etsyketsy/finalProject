import React, { Component } from "react";
import { logoutAction } from "../../store/actions/loginAction";
import "./ComfirmationLogOutModal.css";
import { connect } from "react-redux";

class ComfirmationModal extends Component {
  handlelogOut = () => {
    this.props.dispatch(logoutAction());
    this.props.showLogOutConfirmationHandler();
  };

  render() {
    return (
      <div className="logout-confirmation-outside-container">
        <div className="logout-confirmation-inside-container">
          <label>Sure you want to Log Out?</label>
          <button className='cancel-confirmation-button' onClick={() => this.props.showLogOutConfirmationHandler()}>
            Cancel
          </button>
          <button className='logout-confirmation-button'  onClick={this.handlelogOut}>Yes, Log Out</button>
        </div>
      </div>
    );
  }
}

export default connect()(ComfirmationModal);
